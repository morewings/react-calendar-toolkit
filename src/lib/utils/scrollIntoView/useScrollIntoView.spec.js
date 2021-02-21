import {renderHook} from '@testing-library/react-hooks';
import useScrollIntoView from './useScrollIntoView';
import scrollStop from './scrollStop';
import noScroll from './noScroll';

jest.mock('./scrollStop', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('./noScroll', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('./isInViewport', () => ({
  __esModule: true,
  default: jest.fn(() => true),
}));

const parent = document.createElement('div');
parent.dataset.testid = 'parent'; // eslint-disable-line fp/no-mutation
parent.setAttribute('id', 'parent');
const child = document.createElement('div');
child.dataset.testid = 'child'; // eslint-disable-line fp/no-mutation
parent.appendChild(child);
document.body.appendChild(parent);

const ref = {
  current: child,
};

const parentAddEventListener = jest.spyOn(parent, 'addEventListener');
const windowRemoveEventListener = jest.spyOn(window, 'removeEventListener');

describe('useOnClickOutside', () => {
  afterEach(() => {
    scrollStop.mockClear();
    noScroll.mockClear();
    parentAddEventListener.mockClear();
    windowRemoveEventListener.mockClear();
  });

  it('renders', () => {
    expect(() =>
      renderHook(() => useScrollIntoView(ref, '#parent', true))
    ).not.toThrow();
    expect(() =>
      renderHook(() => useScrollIntoView(ref, '#parent', false))
    ).not.toThrow();
    expect(() =>
      renderHook(() => useScrollIntoView({}, '#parent', false))
    ).not.toThrow();
  });

  it('does not do anything, when no valid HTMLElement provided', () => {
    renderHook(() => useScrollIntoView({}, '#parent', true));
    expect(parentAddEventListener).not.toHaveBeenCalled();
    expect(scrollStop).not.toHaveBeenCalled();
  });

  it('does not do anything, when false condition provided', () => {
    renderHook(() => useScrollIntoView(ref, '#parent', false));
    expect(parentAddEventListener).not.toHaveBeenCalled();
    expect(scrollStop).not.toHaveBeenCalled();
  });

  it('attaches listeners and scrolls element into view, when valid HTMLElement and true condition provided', () => {
    renderHook(() => useScrollIntoView(ref, '#parent', true));
    expect(parentAddEventListener).toHaveBeenCalledTimes(1);
    expect(parentAddEventListener).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function),
      false
    );
    expect(scrollStop).toHaveBeenCalledTimes(1);
  });
});

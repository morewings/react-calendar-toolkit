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
parent.dataset.testid = 'parent';
parent.setAttribute('id', 'parent');
const child = document.createElement('div');
child.dataset.testid = 'child';
parent.appendChild(child);
document.body.appendChild(parent);

const ref = {
  current: child,
};

const scrollIntoView = jest.fn();

const parentAddEventListener = jest.spyOn(parent, 'addEventListener');
const windowRemoveEventListener = jest.spyOn(window, 'removeEventListener');

describe('useOnClickOutside', () => {
  afterEach(() => {
    scrollIntoView.mockClear();
    scrollStop.mockClear();
    noScroll.mockClear();
    parentAddEventListener.mockClear();
    scrollIntoView.mockClear();
    windowRemoveEventListener.mockClear();
  });

  beforeAll(() => {
    window.HTMLElement.prototype.scrollIntoView = scrollIntoView;
  });

  afterAll(() => {
    window.HTMLElement.prototype.scrollIntoView = undefined;
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
    expect(scrollIntoView).not.toHaveBeenCalled();
  });

  it('does not do anything, when false condition provided', () => {
    renderHook(() => useScrollIntoView(ref, '#parent', false));
    expect(parentAddEventListener).not.toHaveBeenCalled();
    expect(scrollStop).not.toHaveBeenCalled();
    expect(scrollIntoView).not.toHaveBeenCalled();
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
    expect(scrollIntoView).toHaveBeenCalledTimes(1);
  });
});

import {
  removeCSSVariable,
  setCSSVariable,
  getCSSVariable,
} from './cssVariables';

describe('setCSSVariable', () => {
  it('adds css variable to element', () => {
    const element = document.createElement('div');
    setCSSVariable(element, '--foo', 'bar');
    expect(element.style.getPropertyValue('--foo')).toBe('bar');
  });
});

describe('getCSSVariable', () => {
  it('gets css variable value from element', () => {
    const element = document.createElement('div');
    setCSSVariable(element, '--foo', 'bar');
    expect(getCSSVariable(element, '--foo')).toBe('bar');
  });
});

describe('removeCSSVariable', () => {
  it('gets css variable value from element', () => {
    const element = document.createElement('div');
    setCSSVariable(element, '--foo', 'bar');
    removeCSSVariable(element, '--foo');
    expect(element.style.getPropertyValue('--foo')).toBe('');
  });
});

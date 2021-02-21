import compose from './compose';

const fn1 = arg => arg + 1;
const fn2 = arg => arg + 2;
const fn3 = arg => arg + 3;

describe('compose function', () => {
  it('return curried function', () => {
    const value = 1;
    const getResult = compose(fn1, fn2, fn3);
    const result = getResult(value);
    expect(result).toBe(7);
  });

  it('handles multiple args', () => {
    const fn4 = jest.fn((a, b) => a + b);
    const result = compose(fn4)(3, 6);
    expect(fn4).toHaveBeenCalledWith(3, 6);
    expect(result).toBe(9);
  });
});

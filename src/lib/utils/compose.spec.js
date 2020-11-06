import compose from './compose';

describe('compose function', () => {
  const fn1 = jest.fn();
  const fn2 = jest.fn();
  const fn3 = jest.fn();
  fn1.mockImplementation(arg => arg + 1);
  fn2.mockImplementation(arg => arg + 2);
  fn3.mockImplementation(arg => arg + 3);
  afterEach(() => {
    fn1.mockClear();
    fn2.mockClear();
    fn3.mockClear();
  });

  it('return curried function', () => {
    const value = 1;
    const getResult = compose(fn1, fn2, fn3);
    expect(fn1).not.toHaveBeenCalled();
    expect(fn2).not.toHaveBeenCalled();
    expect(fn3).not.toHaveBeenCalled();
    const result = getResult(value);
    expect(fn1).toHaveBeenCalledTimes(1);
    expect(fn2).toHaveBeenCalledTimes(1);
    expect(fn3).toHaveBeenCalledTimes(1);
    expect(result).toBe(7);
  });

  it('calls functions from right to left', () => {
    const value = 1;
    compose(fn1, fn2, fn3)(value);
    expect(fn3).toHaveBeenCalledWith(1);
    expect(fn2).toHaveBeenCalledWith(4);
    expect(fn1).toHaveBeenCalledWith(6);
  });
  it('handles multiple args', () => {
    const fn4 = jest.fn((a, b) => a + b);
    const result = compose(fn4)(3, 6);
    expect(fn4).toHaveBeenCalledWith(3, 6);
    expect(result).toBe(9);
  });
});

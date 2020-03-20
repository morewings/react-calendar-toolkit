import curry from './curry';

describe('curry function', () => {
  const fn = (arg1, arg2, arg3) => arg1 + arg2 + arg3;
  it('transforms provided function into curried one', () => {
    const curried = curry(fn);
    expect(curried(1)).toBeInstanceOf(Function);
    expect(curried(1, 2)).toBeInstanceOf(Function);
    expect(curried(1)(2)).toBeInstanceOf(Function);
    expect(curried(1, 2, 3)).not.toBeInstanceOf(Function);
    expect(curried(1, 2)(3)).not.toBeInstanceOf(Function);
    expect(curried(1)(2, 3)).not.toBeInstanceOf(Function);
    expect(curried(1)(2)(3)).not.toBeInstanceOf(Function);
    expect(curried(1, 2, 3)).toBe(6);
    expect(curried(1, 2)(3)).toBe(6);
    expect(curried(1)(2, 3)).toBe(6);
    expect(curried(1)(2)(3)).toBe(6);
  });
});

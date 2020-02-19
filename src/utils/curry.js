const curry = fn => {
  const curried = (...args) => {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return (...args2) => curried.apply(this, args.concat(args2));
  };
  return curried;
};

export default curry;

const compose = (...fns) => (...args) =>
  fns.reduceRight(
    (params, f) => (Array.isArray(params) ? f(...params) : f(params)),
    args
  );

export default compose;

const getWrapper = wrapperProp =>
  typeof wrapperProp === 'string'
    ? {wrapperClassname: wrapperProp}
    : {
        wrapperElement: wrapperProp,
      };

export default getWrapper;

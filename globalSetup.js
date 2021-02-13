const setProcessVar = () => {
  process.env.TZ = 'UTC'; // eslint-disable-line fp/no-mutation
};
// to make date specific test from in the same way
export default setProcessVar;

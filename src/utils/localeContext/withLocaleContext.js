import React from 'react';
import PropTypes from 'prop-types';
import defaultLocale from 'date-fns/locale/en-US';
import LocaleContext from './Context';

const withLocaleContext = WrappedComponent => {
  const Component = props => (
    <LocaleContext.Provider value={props.dateFnsLocale}>
      <WrappedComponent {...props} />
    </LocaleContext.Provider>
  );
  Component.propTypes = {
    dateFnsLocale: PropTypes.shape({}),
  };
  Component.defaultProps = {
    dateFnsLocale: defaultLocale,
  };
  return Component;
};

export default withLocaleContext;

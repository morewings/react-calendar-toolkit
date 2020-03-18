import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from './Context';

const withTheme = WrappedComponent => {
  const Component = props => (
    <ThemeContext.Provider value={props.theme}>
      <WrappedComponent {...props} />
    </ThemeContext.Provider>
  );
  Component.propTypes = {
    theme: PropTypes.shape({}),
  };
  Component.defaultProps = {
    theme: {},
  };
  return Component;
};

export default withTheme;

import React from 'react';
import PropTypes from 'prop-types';
import VariablesContainer from 'components/visual/VariablesContainer';

// TODO: make real context
//
// const ThemeContext = React.createContext({});
//

export const withTheme = WrappedComponent => {
  const Component = ({wrapper, ...restProps}) => {
    const Wrapper = wrapper;
    return (
      <Wrapper>
        <WrappedComponent {...restProps} />
      </Wrapper>
    );
  };
  Component.propTypes = {
    wrapper: PropTypes.elementType,
  };
  Component.defaultProps = {
    wrapper: VariablesContainer,
  };
  return Component;
};

// export default ThemeContext;

import React from 'react';
import VariablesContainer from 'components/visual/VariablesContainer';

// TODO: make real context
//
// const ThemeContext = React.createContext({});
//

export const withTheme = WrappedComponent => {
  const Component = props => (
    <VariablesContainer>
      <WrappedComponent {...props} />
    </VariablesContainer>
  );
  return Component;
};

// export default ThemeContext;

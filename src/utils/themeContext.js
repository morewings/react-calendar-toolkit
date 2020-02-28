import React from 'react';
import ThemeDefaults from 'components/visual/ThemeDefaults';

// TODO: make real context
//
// const ThemeContext = React.createContext({});
//

export const withTheme = WrappedComponent => {
  const Component = props => (
    <ThemeDefaults>
      <WrappedComponent {...props} />
    </ThemeDefaults>
  );
  return Component;
};

// export default ThemeContext;

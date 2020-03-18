import React, {useContext} from 'react';

const ThemeContext = React.createContext({});

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeContext;

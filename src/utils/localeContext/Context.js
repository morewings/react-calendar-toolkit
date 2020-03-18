import React, {useContext} from 'react';

const LocaleContext = React.createContext({});

export const useLocaleContext = () => useContext(LocaleContext);

export default LocaleContext;

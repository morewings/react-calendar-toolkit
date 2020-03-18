import {createContext, useContext} from 'react';

const ModalContext = createContext({});

export const useModalContext = () => useContext(ModalContext);

export default ModalContext;

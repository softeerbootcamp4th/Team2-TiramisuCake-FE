import { createContext, useContext } from 'react';
import { ModalContextType } from '../types/modalTypes';

const initialModalState: ModalContextType = {
  isOpen: false,
  setIsOpen: () => {},
};

export const ModalContext = createContext<ModalContextType>(initialModalState);

export const useModalContext = () => useContext(ModalContext);

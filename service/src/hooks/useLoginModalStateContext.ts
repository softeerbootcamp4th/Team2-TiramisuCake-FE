import { useContext } from 'react';
import { loginModalState } from '@/store/types/loginModalTypes';
import { LoginModalStateContext } from '@/store/context/loginModalContext';

export default function useLoginModalStateContext(): loginModalState {
  const context = useContext(LoginModalStateContext);
  if (context === null) {
    throw new Error(
      'LoginModalStateContext must be used within a useLoginModalStateContext'
    );
  }
  return context;
}

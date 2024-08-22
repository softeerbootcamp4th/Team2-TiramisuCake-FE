import { Dispatch, useContext } from 'react';

import { LoginModalDispatchContext } from '@/store/context/loginModalContext';
import { LoginAction } from '@/store/types/loginModalTypes';

export default function useLoginModalDispatchContext(): Dispatch<LoginAction> {
  const context = useContext(LoginModalDispatchContext);
  if (context === null) {
    throw new Error(
      'LoginModalDispatchContext must be used within a useLoginModalDispatchContext'
    );
  }
  return context;
}

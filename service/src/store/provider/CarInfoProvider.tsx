import { ReactNode, useMemo, useReducer } from 'react';
import { CarInfoContext, initialState } from '../context/useCarInfoContext';
import carInfoReducer from '../reducer/carInfoReducer';
import { CARINFO_ACTION } from '../types/carInfoTypes';

export const CarInfoProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(carInfoReducer, initialState);

  const openCarDetail = () => {
    dispatch({ type: CARINFO_ACTION.OPEN_DETAIL_INFOS });
  };

  const closeCarDetail = () => {
    dispatch({ type: CARINFO_ACTION.CLOSE_DETAIL_INFOS });
  };

  const enterFullScreen = () => {
    dispatch({ type: CARINFO_ACTION.ENTER_FULL_SCREEN });
  };

  const exitFullScreen = () => {
    dispatch({ type: CARINFO_ACTION.EXIT_FULL_SCREEN });
  };

  const contextValue = useMemo(
    () => ({
      state,
      openCarDetail,
      closeCarDetail,
      enterFullScreen,
      exitFullScreen,
    }),
    [state]
  );

  return (
    <CarInfoContext.Provider value={contextValue}>
      {children}
    </CarInfoContext.Provider>
  );
};

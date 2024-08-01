import { createContext, useContext } from 'react';
import { CarInfoState } from '../types/carInfoTypes';

export const initialState: CarInfoState = {
  isCarDetailOpen: false,
  isFullScreen: false,
};

export const CarInfoContext = createContext<{
  state: CarInfoState;
  openCarDetail: () => void;
  closeCarDetail: () => void;
  enterFullScreen: () => void;
  exitFullScreen: () => void;
}>({
  state: initialState,
  openCarDetail: () => null,
  closeCarDetail: () => null,
  enterFullScreen: () => null,
  exitFullScreen: () => null,
});

export const useCarInfoContext = () => {
  return useContext(CarInfoContext);
};

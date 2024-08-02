import { createContext, useContext } from 'react';
import { CarInfoState } from '../types/carInfoTypes';

export const initialState: CarInfoState = {
  isCarDetailOpen: false,
  isFullScreen: false,
  currentIndex: 0,
};

export const CarInfoContext = createContext<{
  state: CarInfoState;
  openCarDetail: () => void;
  closeCarDetail: () => void;
  enterFullScreen: () => void;
  exitFullScreen: () => void;
  selectCurrentIndex: (payload: { index: number }) => void;
}>({
  state: initialState,
  openCarDetail: () => null,
  closeCarDetail: () => null,
  enterFullScreen: () => null,
  exitFullScreen: () => null,
  selectCurrentIndex: () => null,
});

export const useCarInfoContext = () => {
  return useContext(CarInfoContext);
};

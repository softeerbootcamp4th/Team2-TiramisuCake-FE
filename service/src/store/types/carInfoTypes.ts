import { Dispatch } from 'react';

export interface CarInfoState {
  isCarDetailOpen: boolean;
  isFullScreen: boolean;
}

export const enum CARINFO_ACTION {
  OPEN_DETAIL_INFOS = 'OPEN_DETAIL_INFOS',
  CLOSE_DETAIL_INFOS = 'CLOSE_DETAIL_INFOS',
  ENTER_FULL_SCREEN = 'ENTER_FULL_SCREEN',
  EXIT_FULL_SCREEN = 'EXIT_FULL_SCREEN',
}

export type CarInfoAction =
  | { type: CARINFO_ACTION.OPEN_DETAIL_INFOS }
  | { type: CARINFO_ACTION.CLOSE_DETAIL_INFOS }
  | { type: CARINFO_ACTION.ENTER_FULL_SCREEN }
  | { type: CARINFO_ACTION.EXIT_FULL_SCREEN };

export type CarInfoDispatch = Dispatch<CARINFO_ACTION>;

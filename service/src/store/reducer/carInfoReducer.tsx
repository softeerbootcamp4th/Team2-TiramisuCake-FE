import {
  CARINFO_ACTION,
  CarInfoAction,
  CarInfoState,
} from '../types/carInfoTypes';

const carInfoReducer = (
  state: CarInfoState,
  action: CarInfoAction
): CarInfoState => {
  switch (action.type) {
    case CARINFO_ACTION.OPEN_DETAIL_INFOS:
      return { ...state, isCarDetailOpen: true };
    case CARINFO_ACTION.CLOSE_DETAIL_INFOS:
      return { ...state, isCarDetailOpen: false };
    case CARINFO_ACTION.ENTER_FULL_SCREEN:
      return { ...state, isFullScreen: true };
    case CARINFO_ACTION.EXIT_FULL_SCREEN:
      return { ...state, isFullScreen: false };
    case CARINFO_ACTION.SELECT_CURRENT_INDEX:
      return { ...state, currentIndex: action.payload.index };
    default:
      return state;
  }
};

export default carInfoReducer;

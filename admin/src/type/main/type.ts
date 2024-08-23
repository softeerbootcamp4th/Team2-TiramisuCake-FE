import {
  EventDrawEventData,
  EventFcFsEventData,
} from '../eventManagement/type';
import { WinDrawEventList, WinFcfsEventList } from '../winManagement/type';

export interface EventResponse extends Response {
  result: {
    fcfsEventList: EventFcFsEventData[];
    drawEvent: EventDrawEventData;
  };
}

export interface WinResponse extends Response {
  result: {
    fcfsEventList: WinFcfsEventList[];
    drawEventList: WinDrawEventList[];
  };
}

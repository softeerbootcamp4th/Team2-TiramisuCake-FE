export interface FcFsEvent {
  round: number;
  startTime: string; // (pattern = "yyyy-MM-dd hh:mm:ss")
  endTime: string;
  winnerNum: number;
}

export interface DrawInfo {
  rank: number;
  winnerNum: number;
  probability: string; // ("xx.xx%")
}

export interface DrawEvent {
  startDate: string; // (pattern = "yyyy-MM-dd")
  endDate: string;
  startTime: string; // (pattern = "hh:mm:ss")
  endTime: string;
  //drawInfoList: DrawInfo[];
}

export interface EventDataResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result?: {
    fcfsEventList: FcFsEvent[];
    drawEvent: DrawEvent;
  };
}

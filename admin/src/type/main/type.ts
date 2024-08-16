export interface FCFSEventList {
  round: number;
  eventDate: string;
  winnerNum: number;
}
export interface DrawEvent {
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
}
export interface EventsData {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    fcfsEventList: FCFSEventList[];
    drawEvent: DrawEvent;
  };
}

export interface DrawEventList {
  rank: number;
  winnerNum: number;
  probability: number;
}

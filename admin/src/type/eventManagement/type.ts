export interface EventFcFsEventData {
  round: number;
  endTime: string;
  startTime: string; // (pattern = "HH:mm:ss")
}

export interface EventDrawEventData {
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
}

export interface FcFsRequest {
  startDate: string;
  endDate: string;
  startTime: string; // (pattern = "HH:mm:ss")
}

export interface DrawRequest {
  startTime: string;
  endTime: string;
}

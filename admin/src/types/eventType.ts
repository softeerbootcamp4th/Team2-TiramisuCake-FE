export interface FcFsRequest {
  startDate: string;
  endDate: string;
  startTime: string; // (pattern = "HH:mm:ss")
}

export interface DrawRequest {
  startTime: string;
  endTime: string;
}

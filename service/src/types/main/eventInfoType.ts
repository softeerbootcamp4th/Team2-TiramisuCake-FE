export interface EventInfoResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: EventResult;
}

export interface EventInfo {
  title: string;
  content: string;
  rewardImage1: string;
  rewardImage2: string;
}

export interface EventResult {
  startDate: string;
  endDate: string;
  eventTitle: string;
  eventDescription: string;
  fcfsInfo: string;
  totalDrawWinner: string;
  remainDrawCount: string;
  fcfsHint: string;
  fcfsStartTime: string;
  eventInfoList: EventInfo[];
}

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
  fcfsInfo: string;
  totalDrawWinner: string;
  remainDrawCount: string;
  eventInfoList: EventInfo[];
}

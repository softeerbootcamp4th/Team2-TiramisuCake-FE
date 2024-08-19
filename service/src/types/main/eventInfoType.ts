export interface EventInfoResponse {
  isSuccess: boolean;
  code: string;
  message: string;
}

export interface EventInfo {
  title: string;
  content: string;
  rewardImage1: string;
  rewardImage2: string;
}

interface StaticEventResult {
  eventTitle: string;
  eventDescription: string;
  eventInfoList: EventInfo[];
}

interface DynamicEventResult {
  startDate: string;
  endDate: string;
  fcfsInfo: string;
  totalDrawWinner: string;
  remainDrawCount: string;
  fcfsHint: string;
  fcfsStartTime: string;
}

export interface StaticEventInfoResponse extends EventInfoResponse {
  result: StaticEventResult;
}

export interface DynamicEventInfoResponse extends EventInfoResponse {
  result: DynamicEventResult;
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

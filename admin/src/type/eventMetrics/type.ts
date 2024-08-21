interface VisitorNum {
  visitDate: string;
  visitorNum: number;
}

interface EventMetricsResult {
  startDate: string;
  endDate: string;
  visitorNumList: VisitorNum[];
  totalVisitorCount: number;
  totalFcfsParticipantCount: number;
  totalDrawParticipantCount: number;
  fcfsParticipantRate: string;
  drawParticipantRate: string;
}

export interface EventMetricsResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result?: EventMetricsResult;
}

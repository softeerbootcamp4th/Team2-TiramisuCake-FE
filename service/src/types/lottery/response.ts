interface FullAttendModal {
  title: string;
  subtitle: string;
  img: string;
  description: string;
}

export interface DrawAttendanceResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    invitedNum: number;
    remainDrawCount: number;
    drawAttendanceCount: number;
    fullAttendModal?: FullAttendModal;
  };
}

export interface WinModal {
  title: string;
  subtitle: string;
  img: string;
  description: string;
}

export interface DrawResultResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    images: string[];
    winModal?: WinModal;
    isDrawWin: boolean;
    shareUrl?: string;
  };
}

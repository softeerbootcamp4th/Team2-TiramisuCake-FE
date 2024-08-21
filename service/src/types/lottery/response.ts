import { ResponseType } from '../apiType';

interface FullAttendModal {
  title: string;
  subtitle: string;
  img: string;
  description: string;
}

export interface DrawAttendanceResponse extends ResponseType {
  result: {
    invitedNum: number;
    remainDrawCount: number;
    drawParticipationCount: number;
    fullAttendModal?: FullAttendModal;
  };
}

export interface WinModal {
  title: string;
  subtitle: string;
  img: string;
  description: string;
}

export interface DrawResultResponse extends ResponseType {
  result: {
    images: string[];
    winModal?: WinModal;
    isDrawWin: boolean;
    shareUrl?: string;
  };
}

export interface DrawHistoryResponse extends ResponseType {
  result: {
    isDrawWin: string;
    drawHistoryList: DrawHistoryList[];
  };
}

interface DrawHistoryList {
  drawRank: number;
  image: string;
  winningDate: Date;
}

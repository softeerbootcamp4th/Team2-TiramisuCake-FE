interface WinModal {
  title: string;
  subtitle: string;
  img: string;
  description: string;
}

interface LoseModal {
  shareUrl: string;
}

export interface DrawResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    invitedNum: number;
    remainDrawCount: number;
    drawParticipationCount: number;
    isDrawWin: boolean;
    images: string[];
    winModal?: WinModal;
    loseModal?: LoseModal;
  };
}

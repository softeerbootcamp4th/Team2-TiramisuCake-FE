import { ResponseType } from '../apiType';

export interface QuizContainerProps {
  answer: string[];
  mode: string;
  isGameEnded: boolean;
  setIsGamedEnded: (isEnded: boolean) => void;
}

export interface ModalData {
  fcfsWinner: boolean;
  fcfsResult: {
    title: string;
    subTitle: string;
    qrCode?: string;
    codeWord?: string;
    fcfsCode?: string;
    expirationDate?: string;
    caution: string;
  };
}

export interface HistoryResponse extends ResponseType {
  result: {
    isFcfsWin: boolean;
    fcfsHistoryList: FcfsHistoryList[];
  };
}

export interface FcfsHistoryList {
  barcode: string;
  fcfsCode: string;
  winningDate: string;
}

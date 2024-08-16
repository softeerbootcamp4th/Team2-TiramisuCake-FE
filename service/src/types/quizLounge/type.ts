export interface QuizContainerProps {
  answer: string[];
  mode: string;
  isGameEnded: boolean;
  setIsGamedEnded: (isEnded: boolean) => void;
}

export interface ModalData {
  isFcfsWinner: boolean;
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

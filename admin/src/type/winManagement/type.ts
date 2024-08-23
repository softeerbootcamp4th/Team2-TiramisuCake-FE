export interface GetRaffleWinnerRequest {
  rank: number;
}

export interface GetFCFSWinnerRequest {
  round: number;
}

export interface PostFCFSWinnerRequest {
  fcfsWinnerNum: number;
}

export interface PostRaffleWinnerRequest {
  firstWinnerNum: number;
  secondWinnerNum: number;
  thirdWinnerNum: number;
}

export interface WinDrawEventList {
  rank: number;
  winnerNum: number;
  probability: number;
}

export interface WinFcfsEventList {
  round: number;
  eventDate: string;
  winnerNum: number;
}

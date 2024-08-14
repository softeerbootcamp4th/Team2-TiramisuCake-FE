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

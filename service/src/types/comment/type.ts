export interface CommentsType {
  commentType: number;
  isMine: boolean;
  nickName: string;
}

export interface CommentsResponseType {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    nextCursor: number;
    totalComments: number;
    comments: CommentsType[];
  };
}

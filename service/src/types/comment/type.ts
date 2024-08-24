import { ResponseType } from '../apiType';

export interface CommentsType {
  commentType: number;
  isMine: boolean;
  nickName: string;
}

export interface CommentsResponseType extends ResponseType {
  result: {
    nextCursor: number;
    totalComments: number;
    comments: CommentsType[];
  };
}

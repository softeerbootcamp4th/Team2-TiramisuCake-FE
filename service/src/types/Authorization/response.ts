export type codeResponse = {
  isSuccess: boolean;
  code: string;
  message: string;
  result?: {
    timeLimit: number;
  };
};

export interface confirmResponse {
  isSuccess: boolean;
  code: string;
  message: string;
}

export interface loginResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    accessToken: string;
    refreshToken: string;
    expiredTime: string;
  };
}

export interface reIssueResponse extends loginResponse {}

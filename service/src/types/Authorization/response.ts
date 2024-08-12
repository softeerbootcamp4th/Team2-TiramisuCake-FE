export type CodeResponse = {
  isSuccess: boolean;
  code: string;
  message: string;
  result?: {
    timeLimit: number;
  };
};

export interface ConfirmResponse {
  isSuccess: boolean;
  code: string;
  message: string;
}

export interface LoginResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result?: {
    accessToken: string;
    refreshToken: string;
    expiredTime: string;
  };
}

export interface ReIssueResponse extends LoginResponse {}

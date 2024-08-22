export const ERROR_CODES = {
  INVALID_FORMAT: 'V400',
  TIMEOUT: 'A400',
  INVALID_CODE: 'A401',
  RESEND_REQUIRED: 'A402',
  ISSUE_LIMIT_EXCEEDED: 'A403',
  NOT_VERIFIED: 'A404',
  USERNAME_NOT_MATCH: 'A405',
} as const;

export const ERROR_MESSAGES = {
  [ERROR_CODES.INVALID_FORMAT]: '인증 코드 형식은 영 대,소문자 6자리입니다.',
  [ERROR_CODES.TIMEOUT]: '인증 시간 초과',
  [ERROR_CODES.INVALID_CODE]: '인증 코드가 일치하지 않습니다.',
  [ERROR_CODES.RESEND_REQUIRED]: '인증 횟수 초과. 인증 코드를 재발급 받으세요.',
  [ERROR_CODES.ISSUE_LIMIT_EXCEEDED]:
    '인증 코드 발급 횟수가 초과되었습니다. 내일 다시 시도하세요.',
  [ERROR_CODES.NOT_VERIFIED]: '인증되지 않은 상태에서 로그인 할 수 없습니다.',
  [ERROR_CODES.USERNAME_NOT_MATCH]:
    '로그인에 실패했습니다. 입력하신 이름이 등록된 정보와 다릅니다.',
} as const;

export type ErrorCode = keyof typeof ERROR_MESSAGES;

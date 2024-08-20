import { useCallback } from 'react';

interface ErrorResponse {
  status: number; // HTTP 상태 코드
  errorCode: string; // 서버 정의 에러 코드
  message: string; // 에러 메시지
}

export const useApiError = () => {
  const handleError = useCallback(async (error: unknown) => {
    console.log(error);
    if (error instanceof Response) {
      // fetch의 Response 객체가 에러로 전달된 경우
      if (!error.ok) {
        const httpStatus = error.status;
        let errorResponse: ErrorResponse | null = null;

        try {
          const data = await error.json();
          errorResponse = data as ErrorResponse;
        } catch (parseError) {
          alert('서버에서 비정상적인 응답을 받았습니다.');
          return;
        }

        const httpMessage = errorResponse?.message || '오류가 발생했습니다.';
        const httpErrorCode = errorResponse?.errorCode || null;

        const handle = httpStatus
          ? statusHandlers[httpStatus]
          : statusHandlers.default;

        handle(httpMessage, httpErrorCode);
        return;
      } else {
        alert('요청이 성공적으로 처리되었습니다.');
      }
    } else if (error instanceof Error) {
      //JavaScript 에러 객체가 전달된 경우
      alert(`에러가 발생했습니다: ${error.message}`);
    } else {
      // 알 수 없는 에러
      alert('알 수 없는 오류가 발생했습니다.');
    }
  }, []);

  const statusHandlers: {
    [key: number]: (msg: string, errorCode: string | null) => void;
    default: (msg: string) => void;
  } = {
    400: (msg: string) => alert(msg),
    401: (msg: string, errorCode) => {
      alert(
        `로그인 세션이 만료가 되었습니다. 다시 로그인 해주세요. ${msg} ${errorCode}`
      );
    },
    500: () => alert('서버 오류가 발생했습니다.'),
    default: () => alert('서버에서 알 수 없는 오류가 발생했습니다.'),
  };

  return { handleError };
};

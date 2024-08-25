// src/hooks/useLoginTest.ts

import { useState, useCallback, ChangeEvent, useEffect } from 'react';
import { useLoginContext } from '@/store/context/useLoginContext';
import {
  useMutationCode,
  useMutationCodeVerification,
  useMutationLogin,
  useMutationTestCode,
} from '@/apis/login/query';
import {
  ConfirmVerificationRequestBody,
  LoginRequestBody,
} from '@/types/Authorization/type';
import { ErrorCode, ERROR_CODES, ERROR_MESSAGES } from '@/constants/error';
import { parseISO, differenceInSeconds } from 'date-fns';
import { validatePhoneNumber } from '@/utils/checkPhoneNumber';
import { checkAuthCode } from '@/utils/checkAuthCode';
import { useQueryClient } from '@tanstack/react-query';
import { setCookie } from '@/utils/cookie';
import { useUrl } from '@/store/context/useUrl';
import { getSharedUrl } from '@/apis/shareurl/api';

export const useLoginLogic = (onClose: () => void) => {
  const codeMutation = useMutationCode();
  const codeVerificationMutation = useMutationCodeVerification();
  const loginMutation = useMutationLogin();

  const [time, setTime] = useState({ timer: 0, minutes: 0, seconds: 0 });
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [validPhoneNumber, setValidPhoneNumber] = useState(false);
  const [validCode, setValidCode] = useState(false);
  const [canSendCode, setCanSendCode] = useState(true);
  const [codeVerified, setCodeVerified] = useState(false);
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [allValid, setAllValid] = useState(false);
  const [codeErrorMsg, setCodeErrorMsg] = useState<string>('');
  const [validateErrorMsg, setValidateErrorMsg] = useState<string>('');

  const { setUrl } = useUrl();
  const queryClient = useQueryClient();
  const { setIsLogined } = useLoginContext();

  const handleNameInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value.replace(/\s+/g, ''); // 공백 제거
      setName(newValue);
    },
    []
  );

  const handlePhoneNumberChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const rawValue = e.target.value.replace(/\D/g, '').slice(0, 11); // 숫자만 추출
      setPhoneNumber(rawValue);
      setValidPhoneNumber(validatePhoneNumber(rawValue));
    },
    []
  );

  const handlePrivacyConsentChange = useCallback(() => {
    setPrivacyConsent((prev) => !prev);
  }, []);

  const handleMarketingConsentChange = useCallback(() => {
    setMarketingConsent((prev) => !prev);
  }, []);

  const handleCodeInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const filteredValue = e.target.value.slice(0, 6); // 6자리까지 제한
      setValidCode(checkAuthCode(filteredValue));
      setCode(filteredValue);
    },
    []
  );

  const handleSendAuthCode = useCallback(
    async (phoneNumber: string) => {
      if (!codeVerified) {
        codeMutation.mutate(phoneNumber, {
          onSuccess: (response) => {
            console.log('인증번호 전송 성공:', response);

            if (response.isSuccess && response.result) {
              setTime({
                timer: response.result.timeLimit,
                minutes: Math.floor(response.result.timeLimit / 60),
                seconds: response.result.timeLimit % 60,
              });
              setValidateErrorMsg('');
              const interval = setInterval(() => {
                setTime((prevTime) => {
                  const newTimer = prevTime.timer - 1;
                  if (newTimer <= 0) {
                    clearInterval(interval);
                    return { ...prevTime, timer: 0, minutes: 0, seconds: 0 };
                  }
                  return {
                    ...prevTime,
                    timer: newTimer,
                    minutes: Math.floor(newTimer / 60),
                    seconds: newTimer % 60,
                  };
                });
              }, 1000);
            } else if (!response.isSuccess && response.code in ERROR_MESSAGES) {
              setCodeErrorMsg('');
              setTime({ timer: 0, minutes: 0, seconds: 0 });
              setCanSendCode(true);
              alert(ERROR_MESSAGES[response.code as ErrorCode]);
            }
          },
          onError: () => {
            setCanSendCode(true);
          },
        });
      }
    },
    [codeMutation, codeVerified]
  );

  const handleVerification = useCallback(
    async (body: ConfirmVerificationRequestBody) => {
      codeVerificationMutation.mutate(body, {
        onSuccess: async (response) => {
          if (response.isSuccess) {
            setCodeErrorMsg('');
            setValidateErrorMsg('');
            setCodeVerified(true);
            setTime({ timer: 0, minutes: 0, seconds: 0 });
          } else {
            if (response.code in ERROR_MESSAGES) {
              const errorMessage = ERROR_MESSAGES[response.code as ErrorCode];

              if (response.code === ERROR_CODES.TIMEOUT) {
                setCodeErrorMsg(errorMessage);
              } else if (response.code !== ERROR_CODES.RESEND_REQUIRED) {
                setValidateErrorMsg(errorMessage);
              } else if (response.code === ERROR_CODES.RESEND_REQUIRED) {
                setValidateErrorMsg(errorMessage);
                setTime({ timer: 0, minutes: 0, seconds: 0 });
                setCodeErrorMsg('');
              }
            }
          }
        },
      });
    },
    [codeVerificationMutation]
  );

  const handleLogin = useCallback(
    async (body: LoginRequestBody) => {
      loginMutation.mutate(body, {
        onSuccess: async (response) => {
          if (response.isSuccess && response.result) {
            setCodeErrorMsg('');
            setValidateErrorMsg('');

            const expiresAt = parseISO(response.result.expiredTime);
            const maxAge = differenceInSeconds(expiresAt, new Date());

            setCookie('accessToken', response.result.accessToken, {
              path: '/',
              maxAge: maxAge,
              secure: true,
              sameSite: 'strict',
            });

            setCookie('refreshToken', response.result.refreshToken, {
              path: '/',
              maxAge: 604800,
              secure: true,
              sameSite: 'strict',
            });

            // 무효화 후 데이터를 다시 가져옴
            await queryClient.invalidateQueries({
              queryKey: ['sharedUrl', response.result.accessToken],
            });

            const sharedUrlData = await queryClient.fetchQuery({
              queryKey: ['sharedUrl', response.result.accessToken],
              queryFn: () => getSharedUrl(response.result?.accessToken),
            });

            if (sharedUrlData.isSuccess) {
              setUrl(sharedUrlData.result.shareUrl);
            }
            setIsLogined(true);
            onClose();
          } else if (!response.isSuccess && response.code in ERROR_MESSAGES) {
            alert(ERROR_MESSAGES[response.code as ErrorCode]);
            resetForm();
          }
        },
      });
    },
    [loginMutation, queryClient, onClose, setUrl, setIsLogined]
  );

  const resetForm = useCallback(() => {
    setName('');
    setPhoneNumber('');
    setCode('');
    setValidCode(false);
    setCodeVerified(false);
    setValidPhoneNumber(false);
    setAllValid(false);
    setMarketingConsent(false);
    setPrivacyConsent(false);
    setCanSendCode(true);
  }, []);

  useEffect(() => {
    if (privacyConsent && codeVerified) {
      setAllValid(true);
    } else {
      setAllValid(false);
    }
  }, [privacyConsent, codeVerified]);

  return {
    time,
    name,
    code,
    phoneNumber,
    validPhoneNumber,
    validCode,
    canSendCode,
    codeVerified,
    privacyConsent,
    marketingConsent,
    allValid,
    codeErrorMsg,
    validateErrorMsg,
    handleNameInputChange,
    handlePhoneNumberChange,
    handlePrivacyConsentChange,
    handleMarketingConsentChange,
    handleCodeInputChange,
    handleSendAuthCode,
    handleVerification,
    handleLogin,
  };
};

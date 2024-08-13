import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getValidation } from '@/utils/getValidation';
import { ROUTER_PATH } from '@/lib/constants';
import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutationPostLogin } from '@/apis/login/query';
import { getCookie, setCookie } from '@/utils/cookie';
const LoginPage = () => {
  const [id, setId] = useState('');
  const [idError, setIdError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const mutation = useMutationPostLogin();

  useEffect(() => {
    const accessToken = getCookie('accessToken');

    if (accessToken) {
      navigate(ROUTER_PATH.MAIN, { replace: true });
    }
  }, [navigate]);

  const handleIdInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newId = e.target.value;
    if (getValidation(newId)) {
      setId(e.target.value);
      setIdError('');
    } else setIdError('아이디는 영어 소문자와 숫자의 조합만 가능합니다.');
  };

  const handlePWInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPW = e.target.value;

    if (getValidation(newPW)) {
      setPassword(newPW);
      setPasswordError('');
    } else {
      setPasswordError('비밀번호는 영어 소문자와 숫자의 조합만 가능합니다.');
    }
  };

  const handleBtnClick = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(
      { account: id, password: password },
      {
        onSuccess: (data) => {
          console.log(data);

          setCookie('accessToken', data.result.accessToken, {
            path: '/',
            maxAge: 100000, // Todo 수정
            secure: true,
            sameSite: 'strict',
          });

          setCookie('refreshToken', data.result.refreshToken, {
            path: '/',
            maxAge: 604800,
            secure: true,
            sameSite: 'strict',
          });
          navigate(ROUTER_PATH.MAIN);
        },
        onError: () => {
          console.log('로그인 실패 ㅠㅠ');
          setId('');
          setPassword('');
        },
      }
    );
  };

  const handleIdClearClick = () => {
    setId('');
    setIdError('');
  };

  const handlePWClearClick = () => {
    setPassword('');
    setPasswordError('');
  };

  return (
    <div className='w-full h-screen flex justify-center items-center '>
      <div className='flex flex-col gap-9 items-center justify-evenly w-[560px] h-[564px] py-7 px-4 bg-[#F3F5F7]'>
        <div className='text-center'>
          <h1 className=' text-4xl font-bold'>관리자 로그인</h1>
          <p className='mt-2.5'>[The new IONIQ 5와 그린라이트] 이벤트 관리</p>
          <p className='text-gray-700'>
            관리자 기능은 로그인 후 이용 가능합니다.
          </p>
        </div>
        <form
          className='flex flex-col gap-4 w-[387px]'
          onSubmit={handleBtnClick}
        >
          <div className='flex flex-col gap-1'>
            <span>아이디</span>
            <div className='relative'>
              <Input onChange={handleIdInputChange} value={id} />
              <img
                src='/svg/close.svg'
                onClick={handleIdClearClick}
                className='absolute top-[35%] right-2 cursor-pointer'
              />
            </div>
            <div className='text-red mt-1 text-sm'>{idError}</div>
          </div>
          <div className='flex flex-col gap-1'>
            <span>비밀번호</span>
            <div className='relative'>
              <Input onChange={handlePWInputChange} value={password} />
              <img
                src='/svg/close.svg'
                onClick={handlePWClearClick}
                className='absolute top-[35%] right-2 cursor-pointer'
              />
            </div>
            <div className='text-red mt-1 text-sm'>{passwordError}</div>
          </div>
          <Button type='submit'>로그인</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

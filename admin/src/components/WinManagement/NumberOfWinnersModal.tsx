import { ChangeEvent, useEffect, useState } from 'react';
import Modal from '../common/Modal';
import { Input } from '../ui/input';
import { getNumberValidation } from '@/utils/getValidation';
import ErrorMessage from '../common/ErrorMessage';
import { useMutationPostFCFSWinner } from '@/apis/winManagement/query';
interface Props {
  handleClose: () => void;
}

const NumberOfWinnersModal = ({ handleClose }: Props) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const mutation = useMutationPostFCFSWinner();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    if (getNumberValidation(e.target.value, 1, 50)) {
      setValue(e.target.value);
      setError('');
    } else {
      setValue('');
      setError('1~50의 숫자만 입력 가능');
    }
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError('');
      }, 3000);
    }
  }, [error]);

  const handleButtonClick = () => {
    console.log(value);
    mutation.mutate(
      {
        fcfsWinnerNum: Number(value),
      },
      {
        onSuccess: (data) => {
          console.log(data);
        },
        onError: () => {
          console.log('실패');
        },
        onSettled: () => {
          setError('');
          setValue('');
        },
      }
    );
  };
  return (
    <Modal handleButtonClick={handleButtonClick} handleCloseClick={handleClose}>
      <div className='w-[137px]'>
        <div className='mb-2'>인원 수 입력</div>
        <Input className='h-12' onChange={handleInputChange} value={value} />
        {error ? (
          <ErrorMessage message={error} />
        ) : (
          <div className='h-[17.1px]'></div>
        )}
      </div>
    </Modal>
  );
};

export default NumberOfWinnersModal;

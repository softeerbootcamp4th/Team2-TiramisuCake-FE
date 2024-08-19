import { useEffect, useState } from 'react';
import Modal from '../common/Modal';
import InputField from './InputField';
import { getNumberValidation } from '@/utils/getValidation';
import { useMutationPostRaffleWinner } from '@/apis/winManagement/query';
import { DrawEventList } from '@/type/main/type';
import { useQueryClient } from '@tanstack/react-query';
interface Props {
  handleClose: () => void;
  drawEventList: DrawEventList[];
}

const WinnersProbabilitiesModal = ({ handleClose, drawEventList }: Props) => {
  const [counts, setCounts] = useState({ first: '', second: '', third: '' });
  const [errors, setErrors] = useState({ first: '', second: '', third: '' });
  const [totalError, setTotalError] = useState('');
  const mutation = useMutationPostRaffleWinner();
  const queryClient = useQueryClient();

  useEffect(() => {
    setCounts({
      first: drawEventList[0].winnerNum.toString(),
      second: drawEventList[1].winnerNum.toString(),
      third: drawEventList[2].winnerNum.toString(),
    });
  }, [drawEventList]);

  const handleInputChange = (
    type: 'first' | 'second' | 'third',
    value: string,
    min: number,
    max: number
  ) => {
    if (getNumberValidation(value, min, max)) {
      setCounts((prev) => ({ ...prev, [type]: value }));
      setErrors((prev) => ({ ...prev, [type]: '' }));
    } else {
      setCounts((prev) => ({ ...prev, [type]: '' }));
      setErrors((prev) => ({
        ...prev,
        [type]: `${min}~${max}의 숫자만 입력 가능`,
      }));
    }
  };

  const handleButtonClick = () => {
    if (!counts.first || !counts.second || !counts.third) {
      setTotalError('입력하지 않은 값이 있습니다.');
      return;
    }
    mutation.mutate(
      {
        firstWinnerNum: Number(counts.first),
        secondWinnerNum: Number(counts.second),
        thirdWinnerNum: Number(counts.third),
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['getWinnerData'] });
        },
        onError: () => {
          console.log('실패');
        },
        onSettled: () => {
          setCounts({ first: '', second: '', third: '' });
          setErrors({ first: '', second: '', third: '' });
        },
      }
    );
  };

  useEffect(() => {
    if (totalError) {
      const timer = setTimeout(() => {
        setTotalError('');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [totalError, setTotalError]);

  return (
    <Modal handleButtonClick={handleButtonClick} handleCloseClick={handleClose}>
      <div className='flex flex-col w-[241px] h-[260px] items-center'>
        <div className='underline decoration-1 pr-2 text-xs flex w-[241px] text-end mx-auto'>
          당첨확률
        </div>
        <div className='flex flex-col gap-[1.2rem] items-center w-full'>
          <InputField
            label='1등'
            value={counts.first}
            setValue={(value) => handleInputChange('first', value, 1, 5)}
            error={errors.first}
            setError={(error) =>
              setErrors((prev) => ({ ...prev, first: error }))
            }
            validationRange={[1, 5]}
            probability={drawEventList[0].probability}
          />
          <InputField
            label='2등'
            value={counts.second}
            setValue={(value) => handleInputChange('second', value, 1, 10)}
            error={errors.second}
            setError={(error) =>
              setErrors((prev) => ({ ...prev, second: error }))
            }
            validationRange={[1, 10]}
            probability={drawEventList[1].probability}
          />
          <InputField
            label='3등'
            value={counts.third}
            setValue={(value) => handleInputChange('third', value, 1, 100)}
            error={errors.third}
            setError={(error) =>
              setErrors((prev) => ({ ...prev, third: error }))
            }
            validationRange={[1, 100]}
            probability={drawEventList[2].probability}
          />
        </div>
        <div className='text-xs text-red'>{totalError}</div>
      </div>
    </Modal>
  );
};

export default WinnersProbabilitiesModal;

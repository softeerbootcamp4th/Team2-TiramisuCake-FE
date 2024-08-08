import { useState } from 'react';
import Modal from '../common/Modal';
import InputField from './InputField';
import { getNumberValidation } from '@/utils/getValidation';

interface Props {
  handleClose: () => void;
}

const WinnersProbabilitiesModal = ({ handleClose }: Props) => {
  const [counts, setCounts] = useState({ first: '', second: '', third: '' });
  const [errors, setErrors] = useState({ first: '', second: '', third: '' });

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
    console.log(counts.first, counts.second, counts.third);
  };

  return (
    <Modal handleButtonClick={handleButtonClick} handleCloseClick={handleClose}>
      <div className='flex flex-col w-[241px] h-[260px] items-end'>
        <div className='underline decoration-1 pr-2 text-xs'>당첨확률</div>
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
          />
        </div>
      </div>
    </Modal>
  );
};

export default WinnersProbabilitiesModal;

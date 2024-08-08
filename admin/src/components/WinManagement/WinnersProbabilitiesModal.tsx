import { ChangeEvent, useState } from 'react';
import Modal from '../common/Modal';
import { Input } from '../ui/input';
import { getNumberValidation } from '@/utils/getValidation';
import ErrorMessage from '../common/ErrorMessage';
interface Props {
  handleClose: () => void;
}

const WinnersProbabilitiesModal = ({ handleClose }: Props) => {
  const [firstCount, setFirstCount] = useState('');
  const [secondCount, setSecondCount] = useState('');
  const [thirdCount, setThirdCount] = useState('');

  const [firstError, setFirstError] = useState('');
  const [secondError, setSecondError] = useState('');
  const [thirdError, setThirdError] = useState('');

  const handleFirstInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    if (getNumberValidation(e.target.value, 1, 5)) {
      setFirstCount(e.target.value);
      setFirstError('');
    } else {
      setFirstCount('');
      setFirstError('1~5의 숫자만 입력 가능합니다.');
    }
  };
  const handleSecondInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    if (getNumberValidation(e.target.value, 1, 10)) {
      setSecondCount(e.target.value);
      setSecondError('');
    } else {
      setSecondCount('');
      setSecondError('1~10의 숫자만 입력 가능합니다.');
    }
  };
  const handleThirdInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    if (getNumberValidation(e.target.value, 1, 100)) {
      setThirdCount(e.target.value);
      setThirdError('');
    } else {
      setThirdCount('');
      setThirdError('1~100의 숫자만 입력 가능합니다.');
    }
  };

  const handleButtonClick = () => {
    console.log(firstCount, secondCount, thirdCount);
  };

  return (
    <Modal handleButtonClick={handleButtonClick} handleCloseClick={handleClose}>
      <div className='flex flex-col w-[241px] h-[220px] items-end'>
        <div className='underline decoration-1 pr-2 text-xs'>당첨확률</div>
        <div className='flex flex-col gap-[1.2rem] items-center w-full'>
          <div className='flex gap-4 w-full items-center justify-evenly'>
            <span>1등</span>
            <div>
              <Input
                className='w-[88px] h-12'
                onChange={handleFirstInputChange}
              />
              <ErrorMessage message={firstError} />
            </div>

            <span className='underline decoration-1'>0.0000</span>
          </div>
          <div className='flex gap-4 w-full items-center justify-evenly'>
            <span>2등</span>
            <div>
              <Input
                className='w-[88px] h-12'
                height={48}
                onChange={handleSecondInputChange}
              />
              <ErrorMessage message={secondError} />
            </div>

            <span>0.0000</span>
          </div>
          <div className='flex gap-4 w-full items-center justify-evenly'>
            <span>3등</span>
            <div>
              <Input
                className='w-[88px] h-12'
                height={48}
                onChange={handleThirdInputChange}
              />
              <ErrorMessage message={thirdError} />
            </div>

            <span>0.0000</span>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default WinnersProbabilitiesModal;

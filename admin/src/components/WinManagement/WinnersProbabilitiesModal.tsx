import { useState } from 'react';
import Modal from '../common/Modal';
import InputField from './InputField';
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

  const handleButtonClick = () => {
    console.log(firstCount, secondCount, thirdCount);
  };

  return (
    <Modal handleButtonClick={handleButtonClick} handleCloseClick={handleClose}>
      <div className='flex flex-col w-[241px] h-[260px] items-end'>
        <div className='underline decoration-1 pr-2 text-xs'>당첨확률</div>
        <div className='flex flex-col gap-[1.2rem] items-center w-full'>
          <InputField
            label='1등'
            value={firstCount}
            setValue={setFirstCount}
            error={firstError}
            setError={setFirstError}
            validationRange={[1, 5]}
          />
          <InputField
            label='2등'
            value={secondCount}
            setValue={setSecondCount}
            error={secondError}
            setError={setSecondError}
            validationRange={[1, 10]}
          />
          <InputField
            label='3등'
            value={thirdCount}
            setValue={setThirdCount}
            error={thirdError}
            setError={setThirdError}
            validationRange={[1, 100]}
          />
        </div>
      </div>
    </Modal>
  );
};

export default WinnersProbabilitiesModal;

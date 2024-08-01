import { useCarInfoContext } from '@/store/context/useCarInfoContext';
import { useState } from 'react';

interface CarDetailProps {
  leftImageUrl: string;
  rightImageUrl: string;
  leftTitle: string;
  rightTitle: string;
  leftDescription: string;
  rightDescription: string;
}

const CarDetail = ({
  leftImageUrl,
  rightImageUrl,
  leftTitle,
  rightTitle,
  leftDescription,
  rightDescription,
}: CarDetailProps) => {
  const { closeCarDetail } = useCarInfoContext();
  const [activeImage, setActiveImage] = useState<'left' | 'right'>('left');
  const handleLeftClick = () => {
    setActiveImage('left');
  };

  const handleRightClick = () => {
    setActiveImage('right');
  };

  return (
    <div className='flex w-[1184px] h-[638px] z-50 relative'>
      <div
        className={`transition-all duration-300 relative ${activeImage === 'left' ? 'w-[1000px]' : 'w-[184px] bg-black z-10'} `}
        onClick={handleLeftClick}
      >
        <p></p>
        <img src={leftImageUrl} className='h-full w-full object-cover' />
        {activeImage !== 'left' ? (
          <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
            <p className='text-white text-b-xxl font-semibold'>{leftTitle}</p>
          </div>
        ) : (
          <div className='absolute bottom-12 left-12 w-full text-white flex flex-col gap-4'>
            <p className='text-b-xxl font-semibold'>{leftTitle}</p>
            <p className='text-b-m spa'>{leftDescription}</p>
          </div>
        )}
      </div>
      <div
        className={`transition-all duration-300 relative ${activeImage === 'right' ? 'w-[1000px]' : 'w-[184px]  bg-black z-10'} `}
        onClick={handleRightClick}
      >
        <img src={rightImageUrl} className='h-full w-full object-cover' />
        {activeImage !== 'right' ? (
          <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
            <p className='text-white text-b-xxl font-semibold'>{rightTitle}</p>
          </div>
        ) : (
          <div className='absolute bottom-12 left-12 w-full text-white flex flex-col gap-4'>
            <p className='text-b-xxl font-semibold'>{rightTitle}</p>
            <p className='text-b-m'>{rightDescription}</p>
          </div>
        )}
      </div>
      <img
        src='/svg/Close.svg'
        className='absolute top-[-49px] right-0'
        onClick={closeCarDetail}
      />
    </div>
  );
};

export default CarDetail;

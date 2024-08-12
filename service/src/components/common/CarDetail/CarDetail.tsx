import { useCarInfoContext } from '@/store/context/useCarInfoContext';
import { useState } from 'react';
import splitSentences from '@/utils/splitSentence';
import { motion } from 'framer-motion';
import { SCROLL_MOTION } from '@/constants/animation';

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
    <div className='flex w-[1184px] h-[638px] z-50 relative cursor-pointer'>
      <div
        className={`transition-all duration-300 relative ${activeImage === 'left' ? 'w-[1000px]' : 'w-[184px] bg-black z-10'} `}
        onClick={handleLeftClick}
      >
        <p></p>
        <img src={leftImageUrl} className='h-full w-full object-cover' />
        {activeImage !== 'left' ? (
          <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
            <motion.p
              {...SCROLL_MOTION}
              className='text-white text-b-xxl font-semibold'
            >
              {leftTitle}
            </motion.p>
          </div>
        ) : (
          <motion.div
            {...SCROLL_MOTION}
            className='absolute bottom-12 left-12 w-full text-white flex flex-col gap-4'
          >
            <p className='text-h-m font-semibold'>{leftTitle}</p>
            <p className='text-b-m spa'>{splitSentences(leftDescription)}</p>
          </motion.div>
        )}
      </div>
      <div
        className={`transition-all duration-300 relative ${activeImage === 'right' ? 'w-[1000px]' : 'w-[184px]  bg-black z-10'} `}
        onClick={handleRightClick}
      >
        <img src={rightImageUrl} className='h-full w-full object-cover' />
        {activeImage !== 'right' ? (
          <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
            <motion.p
              {...SCROLL_MOTION}
              className='text-white text-b-xxl font-semibold'
            >
              {rightTitle}
            </motion.p>
          </div>
        ) : (
          <motion.div
            {...SCROLL_MOTION}
            className='absolute bottom-12 left-12 w-full text-white flex flex-col gap-4'
          >
            <p className='text-h-s font-semibold'>{rightTitle}</p>
            <p className='text-b-m'>{splitSentences(rightDescription)}</p>
          </motion.div>
        )}
      </div>
      <img
        src='/svg/closeIcon.svg'
        className='absolute top-[-49px] right-0 cursor-pointer'
        onClick={closeCarDetail}
      />
    </div>
  );
};

export default CarDetail;

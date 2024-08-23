import { SCROLL_MOTION } from '@/constants/animation';
import { motion } from 'framer-motion';
import { memo } from 'react';

interface DrawInfoContainerProps {
  title: string;
}
const DrawInfoContainer = ({ title }: DrawInfoContainerProps) => {
  return (
    <motion.div
      {...SCROLL_MOTION}
      className='flex-1 flex flex-col w-full max-w-[650px] items-center gap-4 bg-gradient-to-b from-white/20 to-white/10 shadow-custom backdrop-blur-custom px-16 py-12'
    >
      <div className='text-h-m font-bold text-hyundai'>{title}</div>
      <div className='flex w-full justify-evenly mt-10 items-center'>
        <div className='flex flex-col items-center gap-6'>
          <img className='w-[6.25rem] h-[6.25rem]' src='/draw.png' />
          <p className='text-b-xl font-semibold text-white whitespace-nowrap'>
            매일 복권 기회 1회
          </p>
        </div>
        <img src='/svg/right_arrow.svg' className=' w-[55px] h-[70px]' />
        <div className='flex flex-col items-center gap-6'>
          <img className='w-[5rem] h-[5rem] mt-2' src='/link.png' />
          <p className='text-b-xl font-semibold text-white  whitespace-nowrap'>
            나만의 Url 공유
          </p>
        </div>
        <img src='/svg/right_arrow.svg' className=' w-[55px] h-[70px]' />

        <div className='flex flex-col items-center gap-6'>
          <img className='w-[6.25rem] h-[6.25rem]' src='/ticket.png' />
          <p className='text-b-xl font-semibold text-white  whitespace-nowrap'>
            복권 기회 추가
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default memo(DrawInfoContainer);

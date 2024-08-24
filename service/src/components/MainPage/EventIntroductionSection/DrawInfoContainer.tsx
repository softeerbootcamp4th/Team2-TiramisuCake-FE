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
          <img src='/draw.png' alt='복권 아이콘' width={100} height={100} />
          <p className='text-b-xl font-semibold text-white whitespace-nowrap'>
            매일 복권 기회 1회
          </p>
        </div>
        <img
          src='/svg/right_arrow.svg'
          alt='right arrow'
          width={55}
          height={70}
        />
        <div className='flex flex-col items-center gap-6'>
          <img
            className='mt-5'
            src='/link.png'
            alt='링크 아이콘'
            width={80}
            height={80}
          />
          <p className='text-b-xl font-semibold text-white  whitespace-nowrap'>
            나만의 Url 공유
          </p>
        </div>
        <img
          src='/svg/right_arrow.svg'
          alt='right arrow'
          width={55}
          height={70}
        />
        <div className='flex flex-col items-center gap-6'>
          <img src='/ticket.png' alt='티켓 아이콘' width={100} height={100} />
          <p className='text-b-xl font-semibold text-white  whitespace-nowrap'>
            복권 기회 추가
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default memo(DrawInfoContainer);

import { motion } from 'framer-motion';
import { SCROLL_MOTION } from '@/constants/animation';

interface FcfsInfoContainerProps {
  title: string;
  text: string;
}

const FcfsInfoContainer = ({ title, text }: FcfsInfoContainerProps) => {
  return (
    <motion.div
      {...SCROLL_MOTION}
      className='flex flex-col items-center gap-4 w-full bg-gradient-to-b from-white/20 to-white/10 shadow-custom backdrop-blur-custom px-5 py-16'
    >
      <div className='text-h-m font-bold text-hyundai'>{title}</div>
      <div className='flex gap-5 w-full justify-evenly mt-10 items-center'>
        <div className='flex flex-col items-center gap-6'>
          <img className='w-[6.25rem] h-[6.25rem]' src='/word.png' />
          <p className='text-b-xl font-semibold text-white'>
            {text} 선착순 퀴즈
          </p>
        </div>
        <img src='/svg/right_arrow.svg' className=' w-[70px] h-[70px]' />

        <div className='flex flex-col items-center gap-6'>
          <img className='w-[6.25rem] h-[6.25rem]' src='/surprise-box.png' />
          <p className='text-b-xl font-semibold text-white '>
            단어 맞추고 선물 받기
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FcfsInfoContainer;

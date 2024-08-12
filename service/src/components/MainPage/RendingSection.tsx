import Button from '../common/Button/Button';
import { useNavigate } from 'react-router-dom';
import Bouncing from '../common/Bouncing/Bouncing';
import { motion } from 'framer-motion';

const backgroundImage = '/gohwazil.webp';
const gifFile = '/gifs.gif';
const downarrow = '/svg/BigArrow.svg';
// const jsonfile = '/softeer (1).json';
interface RendingSectionProps {
  onArrowClick: () => void;
}

const RendingSection = ({ onArrowClick }: RendingSectionProps) => {
  const navigate = useNavigate();
  const showComments = () => {
    navigate('/comments-lounge');
  };
  return (
    <>
      <div
        className='bg-cover bg-center bg-no-repeat min-h-screen min-w-screen flex items-center justify-center'
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className='flex w-[54.125rem] flex-col items-center gap-9 z-5'>
          <motion.div
            className='text-[6rem] text-center font-montserrat text-6xl font-bold leading-tight'
            style={{
              backgroundImage:
                'linear-gradient(180deg, #FFF 39.36%, rgba(255, 255, 255, 0.80) 83.14%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
            }}
          >
            The New IONIQ 5
          </motion.div>
          <div className='flex'>
            <img
              src={gifFile}
              alt='Description of the GIF'
              className='w-[12.5rem] h-[11.25rem] flex-shrink-0'
            />
          </div>
          <Button
            type='square'
            text='이벤트 기대평 쓰러가기'
            isArrow
            handleClick={showComments}
          />
          <div className=' mt-40 '>
            <Bouncing>
              <img
                className='hover:cursor-pointer'
                src={downarrow}
                alt='Arrow'
                onClick={onArrowClick}
              />
            </Bouncing>
          </div>
        </div>
      </div>
    </>
  );
};
export default RendingSection;

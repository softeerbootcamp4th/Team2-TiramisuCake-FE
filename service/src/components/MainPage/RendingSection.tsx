import Button from '../common/Button/Button';
import { useNavigate } from 'react-router-dom';
import Bouncing from '../common/Bouncing/Bouncing';
import { motion } from 'framer-motion';

const backgroundImage = '/gohwazil.webp';
const gifFile = '/gifs.gif';
const downarrow = '/svg/BigArrow.svg';

interface RendingSectionProps {
  onArrowClick: () => void;
}

const RendingSection = ({ onArrowClick }: RendingSectionProps) => {
  const navigate = useNavigate();

  const showComments = () => {
    navigate('/comments-lounge');
  };

  const text = 'The New IONIQ 5'.split(' ');

  return (
    <div
      className='bg-cover bg-center bg-no-repeat min-h-screen min-w-screen flex items-center justify-center'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className='flex flex-col justify-center items-center gap-9 z-5'>
        <motion.div
          initial={{ scale: 1.6, y: '50%' }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className='flex flex-col items-center gap-2'
        >
          <div>
            {text.map((el, i) => (
              <motion.span
                className='text-[120px] text-center font-montserrat text-6xl font-bold leading-tight'
                style={{
                  backgroundImage:
                    'linear-gradient(180deg, #FFF 39.36%, rgba(255, 255, 255, 0.80) 83.14%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: i / 2.5,
                }}
                key={i}
              >
                {el}{' '}
              </motion.span>
            ))}
          </div>

          <motion.p
            className='text-h-s font-semibold text-white'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            편안한 일상을 누리다
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className='flex flex-col items-center'
        >
          <div className='flex mb-5'>
            <img
              src={gifFile}
              alt='Description of the GIF'
              className='w-[12.5rem] h-[11.25rem] flex-shrink-0'
            />
          </div>
          <Button
            type='square'
            text='Event 기대평 쓰러가기'
            isArrow
            handleClick={showComments}
          />
          <div className='mt-40'>
            <Bouncing>
              <img
                className='hover:cursor-pointer'
                src={downarrow}
                alt='Arrow'
                onClick={onArrowClick}
              />
            </Bouncing>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RendingSection;

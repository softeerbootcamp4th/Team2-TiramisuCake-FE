import Button from '../common/Button/Button';
import { useNavigate } from 'react-router-dom';
import Bouncing from '../common/Bouncing/Bouncing';
import { motion } from 'framer-motion';
import { ROUTER_PATH } from '@/constants/lib/constants';
import scrollToElementId from '@/utils/scrollToElementId';
import { useTabContext } from '@/store/context/useTabContext';
import { memo } from 'react';

const backgroundImage =
  'https://d1wv99asbppzjv.cloudfront.net/main-page/rending-bg.webp';
const gifFile = '/gifs.gif';
const downarrow = '/svg/BigArrow.svg';

const RendingSection = () => {
  const navigate = useNavigate();
  const { setActiveTab } = useTabContext();
  const showComments = () => {
    navigate(ROUTER_PATH.COMMENTS_LOUNGE);
  };
  const handleArrowClick = () => {
    scrollToElementId({ sectionId: 'event', behavior: 'smooth' });
    setActiveTab('event');
  };

  const text = 'The New IONIQ 5'.split(' ');

  return (
    <div
      className='snap-start bg-cover bg-center bg-no-repeat min-h-screen min-w-screen flex items-center justify-center'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className='flex flex-col justify-center items-center gap-9 z-5'>
        <motion.div
          initial={{ scale: 1.6, y: '50%' }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
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
                viewport={{ once: true }}
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
            viewport={{ once: true }}
          >
            편안한 일상을 누리다
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          viewport={{ once: true }}
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
                className='hover:cursor-pointer py-5'
                src={downarrow}
                alt='Arrow'
                onClick={handleArrowClick}
              />
            </Bouncing>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default memo(RendingSection);

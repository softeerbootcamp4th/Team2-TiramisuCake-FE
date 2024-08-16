import { motion } from 'framer-motion';

interface HeaderProps {
  title: string;
  subTitle: string;
}

const Header = ({ title, subTitle }: HeaderProps) => {
  return (
    <motion.div
      initial={{ x: '-50%', y: -100, opacity: 0 }}
      animate={{ x: '-50%', y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
        x: '50%',
      }}
      className='text-white flex flex-col justify-center items-center absolute top-[186px] left-1/2 min-w-fit whitespace-nowrap'
    >
      <p className='text-b-xl'>{subTitle}</p>
      <h2 className='font-montserrat text-[60px] font-bold'>{title}</h2>
    </motion.div>
  );
};

export default Header;

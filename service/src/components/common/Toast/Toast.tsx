import { motion } from 'framer-motion';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

const Toast = ({ message, onClose }: ToastProps) => {
  return (
    <motion.div
      className='rounded-[2rem] text-white bg-green-800 px-8 py-2 fixed bottom-10 z-[1000]'
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      onAnimationComplete={(definition) => {
        if (definition === 'exit') onClose(); // 애니메이션이 exit 상태에서 완료될 때 onClose 호출
      }}
    >
      {message}
    </motion.div>
  );
};

export default Toast;

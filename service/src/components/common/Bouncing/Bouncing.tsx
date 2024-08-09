import { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

const Bouncing = ({ children }: PropsWithChildren) => {
  return (
    <motion.div
      animate={{ y: [0, 20, 0] }}
      transition={{
        duration: 0.7,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
};

export default Bouncing;

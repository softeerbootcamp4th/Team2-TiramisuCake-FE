import { useState, ReactNode } from 'react';
import { VideoContext } from '../context/useVideoContext';

export const VideoProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <VideoContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </VideoContext.Provider>
  );
};

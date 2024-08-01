import { createContext, useContext } from 'react';

interface VideoContextProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const VideoContext = createContext<VideoContextProps | undefined>(
  undefined
);

export const useVideoContext = (): VideoContextProps => {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error('useVideoContext must be used within a VideoProvider');
  }
  return context;
};

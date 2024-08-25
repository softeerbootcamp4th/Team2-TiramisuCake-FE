import { useState, useEffect, RefObject } from 'react';

const useVideoMetadata = (videoRef: RefObject<HTMLVideoElement>) => {
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      const handleLoadedMetadata = () => {
        setDuration(videoRef.current!.duration);
      };

      const videoElement = videoRef.current;
      videoElement.addEventListener('loadedmetadata', handleLoadedMetadata);

      return () => {
        videoElement.removeEventListener(
          'loadedmetadata',
          handleLoadedMetadata
        );
      };
    }
  }, [videoRef]);

  return duration;
};

export default useVideoMetadata;

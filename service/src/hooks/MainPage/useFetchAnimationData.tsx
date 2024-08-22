import { useState, useEffect } from 'react';

const useFetchAnimationData = (url: string) => {
  const [animationData, setAnimationData] = useState(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch animation data');
        }
        return response.json();
      })
      .then((data) => setAnimationData(data))
      .catch((error) => {
        console.error('Error loading animation data:', error);
        setError(error);
      });
  }, [url]);

  return { animationData, error };
};

export default useFetchAnimationData;

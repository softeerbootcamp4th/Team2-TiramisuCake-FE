import shuffleArray from '@/utils/shuffleArray';
import { useEffect, useState } from 'react';

const useInitialArrays = (answer: string[], isGameEnded: boolean) => {
  const filteredAnswer = answer.filter((char) => char !== ' ');

  const [shuffleAnswer, setShuffleAnswer] = useState<string[]>([]);
  const [positions, setPositions] = useState<{ top: number; left: number }[]>(
    []
  );

  useEffect(() => {
    if (!isGameEnded) {
      const shuffled = shuffleArray([...filteredAnswer]);
      setShuffleAnswer(shuffled);

      const initialPositions = shuffled.map((_, index) => ({
        top: Math.random() * 100,
        left: index * 117,
      }));
      setPositions(initialPositions);
    }
  }, [answer, isGameEnded]);

  return {
    filteredAnswer,
    shuffleAnswer,
    positions,
    setPositions,
  };
};

export default useInitialArrays;

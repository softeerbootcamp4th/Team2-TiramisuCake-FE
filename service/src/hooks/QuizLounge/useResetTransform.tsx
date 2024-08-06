import { useEffect, useState } from 'react';

const useResetTransform = (initialValue: number | null = null) => {
  const [resetTransform, setResetTransform] = useState<number | null>(
    initialValue
  );
  useEffect(() => {
    if (resetTransform !== null) {
      // Transform 초기화 후 다시 드래그할 수 있도록 상태를 업데이트
      const timer = setTimeout(() => {
        setResetTransform(null);
      }, 500); // 500ms 후에 resetTransform을 null로 설정
      return () => clearTimeout(timer);
    }
  }, [resetTransform]);

  return { resetTransform, setResetTransform };
};

export default useResetTransform;

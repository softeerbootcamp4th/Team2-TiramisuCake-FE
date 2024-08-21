import { useEffect, useRef, useCallback } from 'react';

const useSectionObserver = (setActiveTab: (tabId: string) => void) => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const setRef = useCallback(
    (el: HTMLDivElement | null, index: number) => {
      if (el) {
        sectionRefs.current[index] = el;

        // 기존 옵저버가 있으면 정리(clean-up)
        if (observerRef.current) {
          observerRef.current.disconnect();
        }

        // IntersectionObserver 초기화
        const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.5,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveTab(entry.target.id);
            }
          });
        };

        // 새로운 옵저버 생성
        observerRef.current = new IntersectionObserver(
          observerCallback,
          observerOptions
        );

        // 각 요소를 관찰 시작
        sectionRefs.current.forEach((section) => {
          if (section) observerRef.current!.observe(section);
        });
      }
    },
    [setActiveTab]
  );

  useEffect(() => {
    return () => {
      // 컴포넌트 언마운트 시 옵저버 정리
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return setRef;
};

export default useSectionObserver;

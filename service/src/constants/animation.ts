export const SCROLL_MOTION = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  viewport: { once: true },
};

export const FLOATING_CAROUSEL = {
  initial: { opacity: 0, y: 50 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0, // 애니메이션 시간을 조금 더 늘립니다.
      ease: 'easeOut', // 자연스러운 이징 함수를 추가합니다.
      delay: 0.4, // 약간의 지연을 추가하여 더욱 부드럽게 만듭니다.
    },
  },
  viewport: { once: true },
};

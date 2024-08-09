// SCROLL_MOTION.js 또는 해당 컴포넌트 파일 상단에 추가
export const SCROLL_MOTION = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

import { useCarInfoContext } from '@/store/context/useCarInfoContext';

interface CarouselBarProps {
  currentIdx: number;
}
const CarouselBar = ({ currentIdx }: CarouselBarProps) => {
  const { state, selectCurrentIndex } = useCarInfoContext();
  return (
    <div className={`flex gap-2 mt-8 ${state.isFullScreen ? 'z-0' : 'z-10'}`}>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`h-[7px] rounded-3xl cursor-pointer ${state.currentIndex === index ? 'w-[33px] bg-white' : 'w-[7px] bg-gray-300'}`}
          onClick={() => selectCurrentIndex({ index: index })}
        />
      ))}
    </div>
  );
};

export default CarouselBar;

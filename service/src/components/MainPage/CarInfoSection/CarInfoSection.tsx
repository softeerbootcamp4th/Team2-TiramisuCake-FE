import { VideoProvider } from '@/store/provider/VideoProvider';
import Carousel from './Carousel';
const CarInfoSection = () => {
  return (
    <VideoProvider>
      <div>
        <Carousel />
      </div>
    </VideoProvider>
  );
};
export default CarInfoSection;

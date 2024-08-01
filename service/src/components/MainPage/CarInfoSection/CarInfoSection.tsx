import { CarInfoProvider } from '@/store/provider/CarInfoProvider';
import Carousel from './Carousel';
const CarInfoSection = () => {
  return (
    <CarInfoProvider>
      <div>
        <Carousel />
      </div>
    </CarInfoProvider>
  );
};
export default CarInfoSection;

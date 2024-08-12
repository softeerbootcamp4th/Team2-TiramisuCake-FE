import { CarInfoProvider } from '@/store/provider/CarInfoProvider';
import Carousel from './Carousel';
import { useQueryGetCarDetailInfo } from '@/apis/main/query';
const CarInfoSection = () => {
  const { data, isLoading } = useQueryGetCarDetailInfo();
  console.log(data);
  return (
    <CarInfoProvider>
      <div>{isLoading ? <div>Loading...</div> : <Carousel />}</div>
    </CarInfoProvider>
  );
};
export default CarInfoSection;

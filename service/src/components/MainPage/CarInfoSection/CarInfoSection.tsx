import { CarInfoProvider } from '@/store/provider/CarInfoProvider';
import Carousel from './Carousel';
import { useQueryGetCarDetailInfo } from '@/apis/main/query';
const CarInfoSection = () => {
  const { data, isLoading } = useQueryGetCarDetailInfo();
  if (isLoading) return <div>Loading...</div>;
  return (
    <CarInfoProvider>
      <Carousel carInfoList={data.result.carInfoList} />
    </CarInfoProvider>
  );
};
export default CarInfoSection;

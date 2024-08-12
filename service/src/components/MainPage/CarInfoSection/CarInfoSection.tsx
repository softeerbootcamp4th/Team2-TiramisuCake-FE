import { CarInfoProvider } from '@/store/provider/CarInfoProvider';
import Carousel from './Carousel';
import { useQueryGetCarDetailInfo } from '@/apis/main/query';
const CarInfoSection = () => {
  const { data, isLoading } = useQueryGetCarDetailInfo();
  if (data) console.log(data.result);
  if (isLoading) return <div>Loading...</div>;
  return (
    <CarInfoProvider>
      <Carousel carInfoList={data.result.carInfoList} />
    </CarInfoProvider>
  );
};
export default CarInfoSection;

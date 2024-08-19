import { CarInfoProvider } from '@/store/provider/CarInfoProvider';
import Carousel from './Carousel';
import { useQueryGetCarDetailInfo } from '@/apis/main/query';
import LoadingPage from '@/components/Loading/Loading';
const CarInfoSection = () => {
  const { data, isLoading } = useQueryGetCarDetailInfo();
  if (isLoading) return <LoadingPage />;
  return (
    <CarInfoProvider>
      <Carousel carInfoList={data.result.carInfoList} />
    </CarInfoProvider>
  );
};
export default CarInfoSection;

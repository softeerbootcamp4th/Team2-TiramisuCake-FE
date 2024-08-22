import CarDetail from '@/components/common/CarDetail/CarDetail';
import { CarDetailInfoList } from '@/types/main/type';

interface CarDetailInfoProps {
  carDetailInfoList: CarDetailInfoList[];
}
const CarDetailInfo = ({ carDetailInfoList }: CarDetailInfoProps) => {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30'>
      <CarDetail
        leftTitle={carDetailInfoList[0].title}
        rightTitle={carDetailInfoList[1].title}
        leftSubTitle={carDetailInfoList[0].subTitle}
        rightSubTitle={carDetailInfoList[1].subTitle}
        leftDescription={carDetailInfoList[0].content}
        rightDescription={carDetailInfoList[1].content}
        leftImageUrl={carDetailInfoList[0].imgUrl}
        rightImageUrl={carDetailInfoList[1].imgUrl}
      />
    </div>
  );
};

export default CarDetailInfo;

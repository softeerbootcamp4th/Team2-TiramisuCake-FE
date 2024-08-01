import CarDetail from '@/components/common/CarDetail/CarDetail';

const CarDetailInfo = () => {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30'>
      <CarDetail
        leftTitle='개방감'
        rightTitle='웰니스'
        leftDescription='심리스 스타일의 12.3인치 LCD 클러스터는 탁월한 개방감으로 즐거운 드라이빙 환경을 제공합니다.
클러스터와 인포테인먼트 시스템에 일체형 커버글래스를 적용하여 와이드한 이미지를 제공합니다.'
        rightDescription='혼커버, 스위치, 스티어링 휠, 도어 등에 유채꽃과 옥수수에서 추출한 성분 약 10%가 함유된 바이오 페인트를 이용했습니다.
시트와 도어 트림에는 재활용 투명 PET병을 재활용한 원사 약 20%의 섬유가 사용됐습니다.'
        leftImageUrl='/thumbnail1.svg'
        rightImageUrl='/thumbnail2.svg'
      />
    </div>
  );
};

export default CarDetailInfo;

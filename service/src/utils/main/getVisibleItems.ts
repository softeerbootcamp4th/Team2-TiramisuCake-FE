import { CarInfoList } from '@/types/main/type';

export const getVisibleItems = (
  currentIndex: number,
  carInfoList: CarInfoList[]
): CarInfoList[] => {
  switch (currentIndex) {
    case 0:
      return [carInfoList[0], carInfoList[1], carInfoList[2]];
    case 1:
      return [carInfoList[0], carInfoList[1], carInfoList[2], carInfoList[3]];
    case 2:
      return carInfoList;
    case 3:
      return [carInfoList[1], carInfoList[2], carInfoList[3], carInfoList[4]];
    case 4:
      return [carInfoList[2], carInfoList[3], carInfoList[4]];
    default:
      return carInfoList;
  }
};

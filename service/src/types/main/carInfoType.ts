export interface CarDetailInfoList {
  id: number;
  title: string;
  subTitle: string;
  imgUrl: string;
  content: string;
}
export interface CarInfoList {
  id: number;
  title: string;
  subTitle: string;
  backgroundImgUrl: string;
  imgTitle: string;
  imgContent: string;
  imgUrl: string;
  carDetailInfoList: CarDetailInfoList[];
}

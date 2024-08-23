import { ResponseType } from '../apiType';

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

export interface EventInfo {
  title: string;
  content: string;
  rewardName1: string;
  rewardName2: string;
  rewardName3: string | null;
  rewardImage1: string;
  rewardImage2: string;
  rewardImage3: string | null;
}

interface StaticEventResult {
  eventTitle: string;
  eventDescription: string;
  eventInfoList: EventInfo[];
}

interface DynamicEventResult {
  startDate: string;
  endDate: string;
  fcfsInfo: string;
  drawInfo: string;
  totalDrawWinner: string;
  remainDrawCount: string;
  fcfsHint: string;
  fcfsStartTime: string | null;
  drawStartTime: string;
  drawEndTime: string;
}

export interface StaticEventInfoResponse extends ResponseType {
  result: StaticEventResult;
}

export interface DynamicEventInfoResponse extends ResponseType {
  result: DynamicEventResult;
}

export interface EventResult {
  startDate: string;
  endDate: string;
  eventTitle: string;
  eventDescription: string;
  fcfsInfo: string;
  totalDrawWinner: string;
  remainDrawCount: string;
  fcfsHint: string;
  fcfsStartTime: string;
  eventInfoList: EventInfo[];
}

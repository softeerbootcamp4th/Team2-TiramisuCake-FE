import React from "react";
import splitSentences from "@/utils/splitSentence";
import downArrow from "/svg/downarrow.svg";
import { InformItem } from "@/types/eventInfoItem";

interface EventSectionProps {
  startDate: "2024.09.02";
  endDate: "2024.09.15";
}

const backgroundImage = "image158.png";
const title = "신차 출시 기념 EVENT";
const description =
  "현대자동차의 The new IONIQ 5 출시 기념 이벤트로 여러분을 초대합니다. 24시간 무료 렌트, 신차 할인 쿠폰 및 다양한 경품을 받아보세요.";

const informs = [
  {
    when: "매주 월,목 오전 10시 선착순 100명",
    hint: "인테리어",
    title: "'24시간 내차' 이벤트",
    eventInformation:
      "하단의 The new IONIQ 5 정보를 바탕으로 빠르게 문장 퀴즈를 맞춰. 24시간 렌트권과 신차 할인권을 얻을 수 있어요.",
    imageUrl: ["svg/렌트권.svg", "svg/할인쿠폰.svg"],
  },
  {
    추첨: "1555명",
    남은경품: "1554개",
    title: "매일 복권 긁고 경품 받기",
    eventInformation:
      "이벤트 기간 동안 추첨을 통해 아이패드 pro 11인치, 현대백화점 10만원권, 1만원권을 드려요. 일주일 연속 참여 시, 스타벅스 쿠폰을 무조건 받을 수 있어요.",
    imageUrl: ["svg/ipad.svg", "svg/money.svg"],
  },
];

const InformCard: React.FC<InformItem> = (props) => {
  return (
    <div className="w-[36.5rem] h-[21.8rem] flex flex-col items-center justify-between p-6 border border-custom-white bg-gradient-to-b from-white/20 to-white/10 shadow-custom backdrop-blur-custom">
      <div className="w-full text-left">
        {props.when && props.hint && (
          <p className="text-b-s text-green-500 text-center">
            {props.when} | 힌트: {props.hint}
          </p>
        )}
        {props.추첨 && props.남은경품 && (
          <div className="flex text-b-s text-green-500 text-center justify-center">
            <span className="mx-3">추첨 {props.추첨} </span>
            <span>남은 경품 {props.남은경품}</span>
          </div>
        )}
        <h2 className=" text-b-xxl font-bold mt-2 mb-4 text-center text-gray-800">{props.title}</h2>
        <p className="text-sm font-Pretendard text-d-s self-stretch text-gray-600 text-center">
          {splitSentences(props.eventInformation)}
        </p>
      </div>
      <div className="flex justify-center items-center w-full h-full">
        {props.imageUrl.map((img, index) => (
          <svg
            key={index}
            viewBox="0 0 246 134"
            width="246"
            height="134"
            preserveAspectRatio="xMidYMid meet"
            className="flex items-center justify-center mx-4"
          >
            <image href={img} width="246" height="134" />
          </svg>
        ))}
      </div>
    </div>
  );
};

const EventSection = ({ startDate, endDate }: EventSectionProps) => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen min-w-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex flex-col w-[73rem] items-center h-[41.6rem]">
        <div className="flex flex-col self-stretch items-center my-4">
          <span className="text-center font-Pretendard text-green-500 font-medium text-b-s">
            {startDate}-{endDate}
          </span>
          <div className="font-bold text-[2.25rem] self-stretch text-center text-gray-900 line-height-[3.375rem]">
            {title}
          </div>
        </div>
        <div className=" font-Pretendard font-normal text-gray-800 text-center">{splitSentences(description)}</div>
        <div className="flex my-6 py-2 px-3">
          <button>번호 인증하고 이벤트 참여하기</button>
        </div>
        <div className="flex items-center flex-row text-center">
          {informs.map((inform, index) => (
            <InformCard key={index} {...inform} />
          ))}
        </div>
        <img className="mt-auto" src={downArrow} alt="Down Arrow" />
      </div>
    </div>
  );
};
export default EventSection;

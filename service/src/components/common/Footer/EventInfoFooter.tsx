const EventInfoFooter = () => {
  const startDate = '2024.09.02';
  const endDate = '2024.09.15';
  return (
    <footer className='min-w-screen h-[39.5rem] p-[4rem_33.25rem_4rem_8rem] flex items-center flex-shrink-0 bg-green-950'>
      <div className='max-w-[48.75rem] mx-auto px-4 flex flex-col items-start gap-6 text-gray-300 font-pretendard'>
        <div className='space-y-2'>
          <h2 className='font-Pretendard font-bold whitespace-nowrap'>
            이벤트 관련 유의사항
          </h2>
          <div className='space-y-1 text-[0.9rem] font-normal'>
            <p className='whitespace-nowrap'>
              1. 이벤트 기간 : {startDate}(월) ~ {endDate}(일) 총 14일
            </p>
            <p className='whitespace-nowrap'>
              2. 본 이벤트는 이벤트 페이지에서 번호 인증을 완료한 고객만 참여할
              수 있습니다.
            </p>
            <p className='whitespace-nowrap'>
              3. 비정상적이거나 불법적인 방법(매크로 등)으로 이벤트에 참여한
              것이 확인될 경우 당첨이 취소되며, 경품은 환수 조치될 수 있습니다.
            </p>
            <p className='whitespace-nowrap'>
              4. 본 이벤트는 현대자동차의 사정에 의해 사전 고지 없이 변경 및
              취소될 수 있습니다.
            </p>
            <p className='whitespace-nowrap'>
              5. 경품 혜택은 현대자동차의 사정에 의해 사전 공지 없이 변경될 수
              있으며, 경품 이미지는 연출된 사진으로 실제와 다를 수 있습니다.
            </p>
            <p className='whitespace-nowrap'>
              6. 50만원 이상 경품에 대한 제세공과금은 현대자동차에서 부담합니다.
              제세공과금 납부 및 신고를 위한 세부 내용은 대상자에 따라 개별
              안내됩니다.
            </p>
            <p className='whitespace-nowrap'>
              7. 이벤트 당첨 이후 개인정보 제공을 거부하거나 개별 안내를
              거부하는 경우, 당첨이 취소될 수 있습니다.
            </p>
          </div>
        </div>

        <div className='space-y-2'>
          <h2 className='font-bold whitespace-nowrap'>
            선착순 이벤트 유의사항
          </h2>
          <div className='space-y-1 text-[0.9rem] font-normal'>
            <li className='whitespace-nowrap'>
              본 이벤트는 (주)쏘카와 함께하며, 쏘카는 유효한 국내/국제
              운전면허증을 보유한 만 21세 이상, 면허 취득 1년 이상 시 회원가입
              및 로그인 후 이용 가능합니다.
            </li>
            <li className='whitespace-nowrap'>
              본 이벤트는 이벤트 기간 내 4회 진행되며, 당첨자로 선정될 시 이후
              회차 참여가 불가합니다.
            </li>
            <li className='whitespace-nowrap'>
              이벤트 참여를 위해 쏘카 어플리케이션에서 추가적인 인증 절차가
              요구될 수 있습니다.
            </li>
            <li className='whitespace-nowrap'>
              이벤트 경품은 당첨자 본인만 수령 가능하며, 양도가 불가능합니다.
            </li>
            <li className='whitespace-nowrap'>
              The new IONIQ 5 렌트 차량 탑승 시 반드시 운전면허증을 제시해야
              하며 미소지 시 렌트카 불가합니다.
            </li>
          </div>
        </div>

        <div className='space-y-2'>
          <h2 className='font-bold whitespace-nowrap'>추첨 이벤트 유의사항</h2>
          <div className='space-y-1 text-[0.9rem] font-normal'>
            <li className='whitespace-nowrap'>
              본 이벤트는 유효한 국내/국제 운전면허증을 보유한 만 18세 이상만
              참여 가능합니다.
            </li>
            <li className='whitespace-nowrap'>
              본 이벤트는 이벤트 기간 내 매일, 하루 최대 1번 참여할 수 있으며,
              당첨 후에도 응모 및 추가 당첨 가능합니다.
            </li>
            <li className='whitespace-nowrap'>
              친구 초대(링크 유입 및 번호 인증 완료) 시 이벤트 기회가 1회
              추가되며, 친구 초대는 중복이 아닌 경우 제한 없이 가능합니다.
            </li>
            <li className='whitespace-nowrap'>
              이벤트 경품은 인증된 전화번호로 개별 수령 안내가 진행되며,
              수령인의 변경은 불가능합니다.
            </li>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EventInfoFooter;

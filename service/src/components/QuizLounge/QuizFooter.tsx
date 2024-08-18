const QuizFooter = ({ mode }: { mode: string }) => {
  return (
    <div className='flex mt-[5.5rem] gap-4 items-center'>
      <img src='/svg/fingerSwipe.svg' />
      <div className='flex flex-col items-center text-b-m text-gray-800'>
        {mode === 'tutorial' && (
          <p>선착순 이벤트 참여 전 튜토리얼 모드로 연습해볼 수 있어요!</p>
        )}
        <p>글자를 영역으로 드래그해 문장을 완성하세요.</p>
      </div>
    </div>
  );
};

export default QuizFooter;

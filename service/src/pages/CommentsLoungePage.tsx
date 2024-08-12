import Comment from '@/components/common/Comment/Comment';
import { useEffect } from 'react';

const CommentsLoungePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className='bg-gradient-bottom-yellow min-h-screen w-[80vw] flex relative justify-center items-center m-auto'>
        <div className=' t-[35%] text-[6rem] text-center font-montserrat text-6xl font-bold leading-tight absolute text-transparent bg-clip-text bg-gradient-text'>
          The New IONIQ 5
        </div>
        <div className='flex w-[36.5rem] flex-col items-center gap-9'>
          <div className='flex overflow-hidden w-[24rem] h-[560px] flex-col items-start gap-2 px-8 py-10 bg-white bg-opacity-20 backdrop-blur-md rounded-3xl relative'>
            <div className='comment-mask'>
              <div className='comment-container'>
                <Comment userName='익명의 너구리' type='car'></Comment>
                <Comment userName='익명의 돌고래' type='exiting'></Comment>
                <Comment userName='익명의 돌고래' type='good'></Comment>
                <Comment userName='익명의 돌고래' type='funny'></Comment>
                <Comment userName='익명의 돌고래' type='exiting'></Comment>
                <Comment userName='익명의 오소리' type='gift'></Comment>
                <Comment userName='익명의 다람쥐(나)' type='funny'></Comment>
                <Comment userName='익명의 돌고래' type='exiting'></Comment>
                <Comment userName='익명의 돌고래' type='gift'></Comment>
              </div>
            </div>
          </div>
          <div className='comment-container'>
            <div className='flex-row flex space-x-4'>
              <Comment isUser type='exiting' />
              <Comment isUser type='gift' />
              <Comment isUser type='funny' />
            </div>
            <div className='px-4 flex-row flex space-x-4'>
              <Comment isUser type='car' />
              <Comment isUser type='good' />
            </div>
            <div className='text-b-s text-gray-800'>
              신차 이벤트에 대한 기대평을 자유롭게 선택해보세요.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentsLoungePage;

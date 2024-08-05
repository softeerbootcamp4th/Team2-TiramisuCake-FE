import Comment from '@/components/common/Comment/Comment';

const CommentsLoungePage = () => {
  return (
    <>
      <div
        className='bg-gradient-bottom-yellow min-h-screen w-[80vw] flex relative justify-center items-center'
        style={{ margin: 'auto' }}
      >
        <div
          className='text-[6rem] text-center font-montserrat text-6xl font-bold leading-tight absolute text-transparent'
          style={{
            backgroundImage:
              'linear-gradient(180deg, #FFF 39.36%, rgba(255, 255, 255, 0.80) 83.14%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            top: '35%',
            textAlign: 'center',
          }}
        >
          The New IONIQ 5
        </div>
        <div className='flex w-[36.5rem] flex-col items-center gap-9'>
          <div className='flex w-[24rem] h-[560px] flex-col items-start gap-[0.625rem] px-8 py-10 bg-white bg-opacity-20 backdrop-blur-md rounded-3xl relative'>
            <div className='absolute top-0 left-0 right-0 h-20p bg-custom-gradient pointer-events-none'></div>
            <div className='flex flex-col items-center gap-5 self-stretch'>
              <div className='opacity-40'>
                <Comment userName='익명의 너구리' type='car'></Comment>
              </div>
              <div className='opacity-60'>
                <Comment userName='익명의 돌고래' type='exiting'></Comment>
              </div>
              <div className='opacity-80'>
                <Comment userName='익명의 돌고래' type='good'></Comment>
              </div>
              <Comment userName='익명의 돌고래' type='funny'></Comment>
              <Comment userName='익명의 돌고래' type='exiting'></Comment>
              <Comment userName='익명의 돌고래' type='gift'></Comment>
            </div>
          </div>
          <div className='flex flex-col items-center gap-4 self-stretch'>
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

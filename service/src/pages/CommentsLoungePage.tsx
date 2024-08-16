import Comment from '@/components/common/Comment/Comment';
import { useTabContext } from '@/store/context/useTabContext';
import { useEffect } from 'react';
import CommentButtonContainer from '@/components/CommentsLounge/CommentButtonContainer';
import CommentsContainer from '@/components/CommentsLounge/CommentsContainer';

const CommentsLoungePage = () => {
  const { setActiveTab } = useTabContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveTab('comments');
  }, []);
  return (
    <>
      <div className='bg-gradient-bottom-yellow min-h-screen w-[80vw] flex relative justify-center items-center m-auto'>
        <div className='text-[6rem] text-center font-montserrat font-bold leading-tight absolute text-transparent bg-clip-text bg-gradient-text'>
          The New IONIQ 5
        </div>
        <div className='flex w-[36.5rem] flex-col items-center gap-9'>
          <CommentsContainer />
          <CommentButtonContainer />
        </div>
      </div>
    </>
  );
};

export default CommentsLoungePage;

import { useEffect, useState } from 'react';
import Button from '@/components/common/Button/Button';
import {
  useMutationPostComment,
  useQueryGetComments,
} from '@/apis/commentsLounge/query';
import CommentsContainer from '@/components/CommentsLounge/CommentsContainer';
import { useQueryClient } from '@tanstack/react-query';

const CommentsLoungePage = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [commentType, setCommentType] = useState(0);

  const queryClient = useQueryClient();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, isLoading } = useQueryGetComments();
  console.log(data);

  const mutation = useMutationPostComment();

  const handleBtnClick = (index: number) => {
    setCommentType(index);
    setIsDisabled(true);
  };

  useEffect(() => {
    if (commentType !== 0) sendCommentToServer(commentType);
  }, [commentType]);

  const sendCommentToServer = (commentType: number) => {
    mutation.mutate(commentType, {
      onSuccess: () => {
        console.log('yey!!!!!');
        queryClient.invalidateQueries({
          queryKey: ['getComments'],
        });
      },
      onSettled: () => {
        setTimeout(() => {
          setIsDisabled(false);
        }, 1000);
      },
    });
    console.log('Information sent to server');
  };

  return (
    <>
      <div className='bg-gradient-bottom-yellow min-h-screen w-[80vw] flex relative justify-center items-center m-auto'>
        <div className=' t-[35%] text-[6rem] text-center font-montserrat text-6xl font-bold leading-tight absolute text-transparent bg-clip-text bg-gradient-text'>
          The New IONIQ 5
        </div>
        <div className='flex w-[36.5rem] flex-col items-center gap-9'>
          <div className='flex overflow-hidden w-[24rem] h-[560px] flex-col items-start gap-2 px-8 py-10 bg-white bg-opacity-20 backdrop-blur-md rounded-3xl relative'>
            <div className='comment-mask'>
              {isLoading ? (
                <>야호</>
              ) : (
                <CommentsContainer comments={data.result.comments} />
              )}
            </div>
          </div>
          <div className='comment-container'>
            <div className='flex-row flex space-x-4'>
              <Button
                type='reaction'
                text='👏 기대돼요'
                isActive={!isDisabled}
                handleClick={() => handleBtnClick(1)}
              />
              <Button
                type='reaction'
                text='🎁 경품 당첨되고 싶어요'
                isActive={!isDisabled}
                handleClick={() => handleBtnClick(2)}
              />
              <Button
                type='reaction'
                text='😝 재밌을 것 같아요'
                isActive={!isDisabled}
                handleClick={() => handleBtnClick(3)}
              />
            </div>
            <div className='px-4 flex-row flex space-x-4'>
              <Button
                type='reaction'
                text='🚗 The new IONIQ 5 최고'
                isActive={!isDisabled}
                handleClick={() => handleBtnClick(4)}
              />
              <Button
                type='reaction'
                text='👍 좋은 이벤트에요'
                isActive={!isDisabled}
                handleClick={() => handleBtnClick(5)}
              />
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

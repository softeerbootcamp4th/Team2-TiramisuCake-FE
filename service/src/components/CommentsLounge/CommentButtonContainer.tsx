import { useEffect, useState } from 'react';
import Button from '../common/Button/Button';
import { useMutationPostComment } from '@/apis/commentsLounge/query';
import { useQueryClient } from '@tanstack/react-query';

const CommentButtonContainer = () => {
  const [commentType, setCommentType] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  const queryClient = useQueryClient();
  const mutation = useMutationPostComment();

  useEffect(() => {
    if (commentType !== 0) sendCommentToServer(commentType);
  }, [commentType]);

  const sendCommentToServer = (commentType: number) => {
    mutation.mutate(commentType, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['comments'],
        });
      },
      onSettled: () => {
        setTimeout(() => {
          setIsDisabled(false);
        }, 1000);
      },
    });
  };

  const handleBtnClick = (index: number) => {
    setCommentType(index);
    setIsDisabled(true);
  };

  return (
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
  );
};

export default CommentButtonContainer;

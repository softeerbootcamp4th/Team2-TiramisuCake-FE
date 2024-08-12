import { CommentsType } from '@/types/comment/commentType';
import Comment from '../common/Comment/Comment';

interface CommentsProps {
  comments: CommentsType[];
}

const CommentsContainer = ({ comments }: CommentsProps) => {
  return (
    <div className='overflow-y-auto w-[24rem] h-[560px] flex flex-col gap-2.5 items-center px-8 py-10 absolute top-0 left-0 '>
      {comments.map((comment, index) =>
        comment.isMine ? (
          <Comment
            key={index}
            userName={comment.nickName}
            type={comment.commentType}
            isUser={true}
          />
        ) : (
          <Comment
            key={index}
            userName={comment.nickName}
            type={comment.commentType}
            isUser={false}
          />
        )
      )}
    </div>
  );
};

export default CommentsContainer;

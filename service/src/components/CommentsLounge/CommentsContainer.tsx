import { CommentType } from '@/types/comment/commentType';
import Comment from '../common/Comment/Comment';

interface CommentsProps {
  comments: CommentType[];
}
const CommentsContainer = ({ comments }: CommentsProps) => {
  return (
    <div className='comment-container'>
      {comments.map((comment, index) =>
        comment.isMine ? (
          <Comment key={index} type='car' isUser={true} />
        ) : (
          <Comment key={index} type='car' isUser={false} />
        )
      )}
    </div>
  );
};

export default CommentsContainer;

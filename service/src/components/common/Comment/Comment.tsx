interface CommentProps {
  userName?: string;
  type: CommentType;
  isUser?: boolean;
}

type CommentType = 'funny' | 'exiting' | 'gift' | 'good' | 'car';

const commentMessage: Record<string, string> = {
  funny: '😝 재밌을 것 같아요',
  exiting: '👏 기대돼요',
  gift: '🎁 경품 당첨되고 싶어요',
  good: '👍 좋은 이벤트에요',
  car: '🚗 The new IONIQ 5 최고',
};

const Comment = ({ userName, type, isUser = false }: CommentProps) => {
  const bgStyle = isUser
    ? 'bg-white rounded shadow-40 cursor-pointer'
    : 'bg-primary rounded-3xl';
  const userNameStyle = isUser ? 'text-gray-600' : 'text-white';
  const messageStyle = isUser ? 'text-primary' : 'text-white';

  return (
    <div className={`w-fit flex gap-2.5 items-center p-2 ${bgStyle}`}>
      {!isUser && <div className={`${userNameStyle}`}>{userName}</div>}
      <div className={`${messageStyle} font-semibold`}>
        {commentMessage[type]}
      </div>
    </div>
  );
};

export default Comment;

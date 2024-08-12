interface CommentProps {
  userName?: string;
  type: number;
  isUser?: boolean;
}

const commentMessage: Record<number, string> = {
  1: '👏 기대돼요',
  2: '🎁 경품 당첨되고 싶어요',
  3: '😝 재밌을 것 같아요',
  4: '🚗 The new IONIQ 5 최고',
  5: '👍 좋은 이벤트에요',
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

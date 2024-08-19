import { CommentsType } from '@/types/comment/commentType';
import InfiniteScroll from 'react-infinite-scroll-component';
import Comment from '@/components/common/Comment/Comment';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getCommentsForScroll } from '@/apis/commentsLounge/api';
import { useCookies } from 'react-cookie';

interface ResponseType {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    nextCursor: number;
    totalComments: number;
    comments: CommentsType[];
  };
}

const CommentsContainer = () => {
  const [cookies] = useCookies(['accessToken', 'refreshToken']);
  const accessToken = cookies.accessToken;

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery<ResponseType>({
    queryKey: ['comments'],
    queryFn: ({ pageParam }) =>
      getCommentsForScroll(pageParam as undefined | number, accessToken),
    initialPageParam: undefined,
    getNextPageParam: (lastPage) => {
      return lastPage.result.nextCursor !== -1
        ? lastPage.result.nextCursor
        : undefined;
    },
  });
  return (
    <InfiniteScroll
      dataLength={
        data?.pages.flatMap((page) => page.result.comments).length || 0
      }
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<div className=' opacity-0'>Loading...</div>}
      scrollableTarget='scrollableDiv'
      inverse={true}
      className='w-[24rem] h-[560px] flex flex-col-reverse'
    >
      <div
        id='scrollableDiv'
        className='overflow-y-auto w-[24rem] h-[560px] flex flex-col-reverse items-center px-8 py-10 comment-mask relative bg-white bg-opacity-20 rounded-3xl'
      >
        {data ? (
          data?.pages.map((page, pageIndex) => (
            <div
              key={pageIndex}
              className=' flex flex-col gap-2.5 items-center '
            >
              {page.result.comments.reverse().map((comment, index) => (
                <Comment
                  key={index}
                  userName={comment.nickName}
                  type={comment.commentType}
                  isUser={comment.isMine}
                />
              ))}
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </InfiniteScroll>
  );
};

export default CommentsContainer;

import { Button } from '@/components/ui/button';
import { DonutChart } from '@/components/ui/donutChart';

import { Chart } from '@/components/ui/Barchart';
import { useQueryGetMetricsData } from '@/apis/eventMetrics/query';
import LoadingPage from './LoadingPage';

const EventMetricsPage = () => {
  const { data, isLoading } = useQueryGetMetricsData();

  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <div className='max-w-full h-full flex-1 m-10 bg-[#F3F5F7] flex flex-col items-center gap-12'>
      <div className='mt-[1.5rem]'>
        <div className='text-black text-center text-4xl font-bold mt-6'>
          이벤트 지표
        </div>
        <div className='text-gray-800 text-sm text-center my-3'>
          이벤트 방문자 수, 이벤트 참여율
        </div>
      </div>
      <div className='flex justify-evenly gap-[3.125rem]'>
        <div className='flex gap-4 bg-white'>
          <Chart />
        </div>
        <hr className='w-[1px] h-[510px] bg-gray-600' />
        <div className='flex gap-[1.2rem]'>
          <DonutChart
            total={data?.result.totalVisitorCount}
            visitors={data?.result.totalFcfsParticipantCount}
            rate={data?.result.fcfsParticipantRate}
            title='선착순 이벤트 참여율'
            footer='이벤트 방문자 수 대비 [선착순 이벤트] 참여자 수의 비'
          />
          <DonutChart
            total={data?.result.totalVisitorCount}
            visitors={data?.result.totalDrawParticipantCount}
            rate={data?.result.drawParticipantRate}
            title='추첨 이벤트 참여율'
            footer='이벤트 방문자 수 대비 [추첨 이벤트] 참여자 수의 비'
          />
        </div>
      </div>
      <Button className='w-[226px] h-9'>새로고침하기</Button>
    </div>
  );
};

export default EventMetricsPage;

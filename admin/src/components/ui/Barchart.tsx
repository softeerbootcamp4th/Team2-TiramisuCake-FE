'use client';

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { useQueryGetMetricsData } from '@/apis/eventMetrics/query';
import LoadingPage from '@/pages/LoadingPage';

export function Chart() {
  const { data, isLoading } = useQueryGetMetricsData();
  const chartData = data?.result?.visitorNumList;
  const firstDate = data?.result?.startDate;
  const lastDate = data?.result?.endDate;
  console.log(data);
  const chartConfig = {
    visitorNum: {
      label: '방문자 수',
      color: '#55A7BA',
    },
  } satisfies ChartConfig;

  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <Card>
      <CardHeader className='text-center'>
        <CardDescription>The new IONIQ 5와 그린라이트🟢</CardDescription>
        <CardTitle>
          이벤트 기간({firstDate}~{lastDate}) 일자별 이벤트 방문자 수
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='visitDate'
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(-5)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey='visitorNum'
              fill='var(--color-participant)'
              radius={8}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col gap-2 text-sm'>
        <div className='leading-none text-muted-foreground text-center'>
          메인 페이지 클릭 방문 수 트래킹 총 결과 값
        </div>
      </CardFooter>
    </Card>
  );
}

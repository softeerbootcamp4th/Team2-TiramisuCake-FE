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

const chartData = [
  { date: '2024-09-02', participant: 186 },
  { date: '2024-09-03', participant: 305 },
  { date: '2024-09-04', participant: 237 },
  { date: '2024-09-06', participant: 73 },
  { date: '2024-09-07', participant: 209 },
  { date: '2024-09-08', participant: 214 },
  { date: '2024-09-09', participant: 120 },
  { date: '2024-09-10', participant: 186 },
  { date: '2024-09-11', participant: 305 },
  { date: '2024-09-12', participant: 237 },
  { date: '2024-09-13', participant: 73 },
  { date: '2024-09-14', participant: 209 },
  { date: '2024-09-15', participant: 214 },
];
const firstDate = chartData[0].date;
const lastDate = chartData[chartData.length - 1].date;
const chartConfig = {
  participant: {
    label: 'participant',
    color: '#55A7BA',
  },
} satisfies ChartConfig;

export function Chart() {
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
              dataKey='date'
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
              dataKey='participant'
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

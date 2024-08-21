import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface Props {
  total: number;
  visitors: number;
  rate: number;
  title: string;
  footer: string;
}

export function DonutChart({ total, visitors, rate, title, footer }: Props) {
  const chartData = [
    {
      event: '이벤트 참여자',
      visitors: visitors,
      fill: '#8CC8D4',
    },
    {
      event: '이벤트 미참여자',
      visitors: total - visitors,
      fill: '#D3D3D3',
    },
  ];
  return (
    <Card className='flex flex-col'>
      <CardHeader className='items-center pb-0'>
        <CardDescription>The new IONIQ 5와 그린라이트🟢</CardDescription>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className='flex-1 pb-0 flex flex-col justify-center items-center'>
        <ResponsiveContainer width='100%' height={250}>
          <PieChart>
            <Tooltip />
            <Pie
              data={chartData}
              dataKey='visitors'
              nameKey='event'
              outerRadius={80}
              fill='#8884d8'
              label
            />
          </PieChart>
        </ResponsiveContainer>
        <div className='text-center mt-5'>
          <strong>참여율: </strong>
          {rate}
        </div>
      </CardContent>
      <CardFooter className='flex-col gap-2 text-sm'>
        <div className='leading-none text-muted-foreground'>{footer}</div>
      </CardFooter>
    </Card>
  );
}

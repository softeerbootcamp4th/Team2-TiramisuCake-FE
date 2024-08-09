import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const chartData = [
  { browser: 'chrome', visitors: 275, fill: '#F4A400' },
  { browser: 'safari', visitors: 200, fill: '#8CC8D4' },
];

interface Props {
  title: string;
  footer: string;
}

export function DonutChart({ title, footer }: Props) {
  return (
    <Card className='flex flex-col'>
      <CardHeader className='items-center pb-0'>
        <CardDescription>The new IONIQ 5와 그린라이트🟢</CardDescription>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className='flex-1 pb-0'>
        <ResponsiveContainer width='100%' height={250}>
          <PieChart>
            <Tooltip />
            <Pie
              data={chartData}
              dataKey='visitors'
              nameKey='browser'
              outerRadius={80}
              fill='#8884d8'
              label
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter className='flex-col gap-2 text-sm'>
        <div className='leading-none text-muted-foreground'>{footer}</div>
      </CardFooter>
    </Card>
  );
}

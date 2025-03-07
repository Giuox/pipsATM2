import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface PerformanceMetric {
  date: string;
  value: number;
}

interface PerformanceMetricsProps {
  data: {
    profitLoss: PerformanceMetric[];
    winRate: PerformanceMetric[];
    drawdown: PerformanceMetric[];
  };
}

const PerformanceMetrics = ({ data }: PerformanceMetricsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Profit/Loss</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ChartContainer>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.profitLoss}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Win Rate</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ChartContainer>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.winRate}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Maximum Drawdown</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ChartContainer>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.drawdown}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#ff7300" />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default PerformanceMetrics;

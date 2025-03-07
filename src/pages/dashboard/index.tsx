import { AppSidebar } from '@/components/layout/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChartContainer, ChartTooltip } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, TrendingUp, Users, AlertTriangle } from 'lucide-react';

// Sample data for the chart
const chartData = [
  { time: '00:00', value: 45000 },
  { time: '04:00', value: 45200 },
  { time: '08:00', value: 45400 },
  { time: '12:00', value: 45100 },
  { time: '16:00', value: 45600 },
  { time: '20:00', value: 45800 },
];

const Dashboard = () => {
  return (
    <main className='w-full min-h-screen bg-background'>
      <div className='container mx-auto px-4 py-8 flex'>
        <AppSidebar />
        
        <div className='flex-1 ml-8 space-y-8'>
          {/* Overview Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>Total Connections</CardTitle>
                <Users className='h-4 w-4 text-muted-foreground' />
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>12</div>
                <p className='text-xs text-muted-foreground'>+2 from last week</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>Active Trades</CardTitle>
                <Activity className='h-4 w-4 text-muted-foreground' />
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>8</div>
                <p className='text-xs text-muted-foreground'>Currently running</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>Total Profit</CardTitle>
                <TrendingUp className='h-4 w-4 text-muted-foreground' />
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>$2,345</div>
                <p className='text-xs text-muted-foreground'>+15% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>Alerts</CardTitle>
                <AlertTriangle className='h-4 w-4 text-muted-foreground' />
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>3</div>
                <p className='text-xs text-muted-foreground'>Requires attention</p>
              </CardContent>
            </Card>
          </div>

          {/* Charts and Trading Activity */}
          <Tabs defaultValue='overview' className='space-y-4'>
            <TabsList>
              <TabsTrigger value='overview'>Overview</TabsTrigger>
              <TabsTrigger value='trades'>Recent Trades</TabsTrigger>
              <TabsTrigger value='performance'>Performance</TabsTrigger>
            </TabsList>

            <TabsContent value='overview' className='space-y-4'>
              <Card>
                <CardHeader>
                  <CardTitle>Trading Overview</CardTitle>
                </CardHeader>
                <CardContent className='h-[400px]'>
                  <ChartContainer>
                    <ResponsiveContainer width='100%' height='100%'>
                      <LineChart data={chartData}>
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey='time' />
                        <YAxis />
                        <Tooltip content={<ChartTooltip />} />
                        <Line
                          type='monotone'
                          dataKey='value'
                          stroke='#8884d8'
                          strokeWidth={2}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value='trades'>
              <Card>
                <CardHeader>
                  <CardTitle>Recent Trades</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='space-y-8'>
                    {/* Add trade history table or list here */}
                    <p className='text-sm text-muted-foreground'>
                      Recent trading activity will be displayed here
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value='performance'>
              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='space-y-8'>
                    {/* Add performance metrics and charts here */}
                    <p className='text-sm text-muted-foreground'>
                      Trading performance metrics will be displayed here
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
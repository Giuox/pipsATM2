import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

interface Trade {
  id: string;
  symbol: string;
  type: 'buy' | 'sell';
  amount: number;
  price: number;
  status: 'completed' | 'pending' | 'failed';
  timestamp: string;
}

interface TradeHistoryTableProps {
  trades: Trade[];
}

const TradeHistoryTable = ({ trades }: TradeHistoryTableProps) => {
  const getStatusColor = (status: Trade['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'pending':
        return 'bg-yellow-500';
      case 'failed':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Symbol</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {trades.map((trade) => (
          <TableRow key={trade.id}>
            <TableCell className='font-medium'>{trade.symbol}</TableCell>
            <TableCell>
              <Badge variant={trade.type === 'buy' ? 'default' : 'secondary'}>
                {trade.type.toUpperCase()}
              </Badge>
            </TableCell>
            <TableCell>{trade.amount}</TableCell>
            <TableCell>${trade.price.toFixed(2)}</TableCell>
            <TableCell>
              <Badge className={getStatusColor(trade.status)}>
                {trade.status.charAt(0).toUpperCase() + trade.status.slice(1)}
              </Badge>
            </TableCell>
            <TableCell>{new Date(trade.timestamp).toLocaleString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TradeHistoryTable;

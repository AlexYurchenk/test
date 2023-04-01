import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface Props {
    name: string;
    rate: number;
}
export default function CurrencyExchangeRateItem({ name, rate }: Props) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant='subtitle2' component='h5'>
                    {rate.toFixed(2)} UAH
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {name}
                </Typography>
            </CardContent>
        </Card>
    );
}

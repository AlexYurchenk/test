import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';

import {
    getCurrencyExchangeRateArray,
    CurrencyExchangeRateAgainstHryvnia,
} from './services/api.service';
import CurrencyExchangeRateList from './components/currency-exchange-rate-list/currency-exchange-rate-list';
import s from './styles/app.module.css';
import Form, { Currency } from './components/form/form';
import { Grid } from '@mui/material';
export interface Data {
    from: Currency;
    to: Currency;
}
function App() {
    const [currency, setCurrency] = useState<
        CurrencyExchangeRateAgainstHryvnia[] | null
    >(null);
    useEffect(() => {
        const getCurrency = async () => {
            const data = await getCurrencyExchangeRateArray();
            setCurrency(data);
        };
        getCurrency();
    }, []);

    if (!currency) {
        return <></>;
    }
    return (
        <>
            <Container className={s.container} maxWidth='md'>
                <Grid container spacing={2} columns={16}>
                    <Grid item xs={8}>
                        <CurrencyExchangeRateList data={currency} />
                    </Grid>
                    <Grid item xs={8}>
                        <Form currency={currency} />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default App;

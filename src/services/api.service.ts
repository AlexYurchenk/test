import axios from 'axios';
import env from 'react-dotenv';
import { convertCurrencyExchangeRateArrayToArrayOfCurrencyNames } from '../helpers/helpers';
export interface CurrencyExchangeRateAgainstHryvnia {
    r030: number;
    txt: string;
    rate: number;
    cc: string;
    exchangedate: string;
}

export async function getCurrencyExchangeRateArray() {
    const { data } = await axios.get<CurrencyExchangeRateAgainstHryvnia[]>(
        env.API_URL
    );
    return data;
}

export async function getCurrencyLabel() {
    return convertCurrencyExchangeRateArrayToArrayOfCurrencyNames(
        await getCurrencyExchangeRateArray()
    );
}

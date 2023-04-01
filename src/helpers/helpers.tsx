import { CurrencyExchangeRateAgainstHryvnia } from '../services/api.service';

export const convertCurrencyExchangeRateArrayToArrayOfCurrencyNames = (
    data: CurrencyExchangeRateAgainstHryvnia[]
) => {
    return data.map((e) => e.cc);
};
export function convertOneCurrencyToAnother(
    data: CurrencyExchangeRateAgainstHryvnia[],
    from: { type: string; amount: number },
    to: string
) {
    const fromCurrencyElement = data.find(({ cc }) => cc === from.type);
    const toCurrencyElement = data.find(({ cc }) => cc === to);
    if (!fromCurrencyElement) {
        throw new Error(
            'There is no such currency from which you want to covert'
        );
    }
    if (!toCurrencyElement) {
        throw new Error(
            'There is no such currency to which you want to covert'
        );
    }
    const fromAmountInUAH = fromCurrencyElement.rate * from.amount;
    return Number(Number(fromAmountInUAH / toCurrencyElement.rate).toFixed(3));
}

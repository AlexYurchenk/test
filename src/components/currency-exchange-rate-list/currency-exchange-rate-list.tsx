import { CurrencyExchangeRateAgainstHryvnia } from '../../services/api.service';
import CurrencyExchangeRateItem from './../currency-exchange-rate-item/currency-exchange-rate-item';
import s from './currency-exchange-rate-list.module.css';
interface Props {
    data: CurrencyExchangeRateAgainstHryvnia[];
}
export default function CurrencyExchangeRateList({ data }: Props) {
    return (
        <ul className={s.currency__exchange__rate__list}>
            {data.map(({ cc, rate }, i) => (
                <li key={i} className={s.currency__exchange__rate__item}>
                    <CurrencyExchangeRateItem name={cc} rate={rate} />
                </li>
            ))}
        </ul>
    );
}

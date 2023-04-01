import Container from '@mui/material/Container';

import FromField from '../form-field/form-field';
import { useState } from 'react';
import { convertOneCurrencyToAnother } from '../../helpers/helpers';
import { CurrencyExchangeRateAgainstHryvnia } from '../../services/api.service';

export interface Currency {
    type: string;
    amount: number;
}
export interface Props {
    currency: CurrencyExchangeRateAgainstHryvnia[];
}
export default function From({ currency }: Props) {
    const [primaryInputFieldValue, setPrimaryInputFieldValue] =
        useState<null | Currency>(null);
    const [secondaryInputFieldValue, setSecondaryInputFieldValue] =
        useState<null | Currency>(null);
    const [primaryInputFieldExchangeValue, setPrimaryInputFieldExchangeValue] =
        useState<null | number>(null);
    const [
        secondaryInputFieldExchangeValue,
        setSecondaryInputFieldExchangeValue,
    ] = useState<null | number>(null);
    const handlePrimaryInputFieldChange = (data: Currency) => {
        setPrimaryInputFieldValue(data);
        console.log(
            primaryInputFieldValue?.amount,
            primaryInputFieldValue?.type,
            secondaryInputFieldValue?.type
        );
        if (data?.amount && data?.type && secondaryInputFieldValue?.type) {
            const result = convertOneCurrencyToAnother(
                currency,
                data,
                secondaryInputFieldValue.type
            );
            setSecondaryInputFieldExchangeValue(result);
        }
    };
    const handleSecondaryInputFieldChange = (data: Currency) => {
        setSecondaryInputFieldValue(data);
        if (data?.amount && data?.type && primaryInputFieldValue?.type) {
            const result = convertOneCurrencyToAnother(
                currency,
                data,
                primaryInputFieldValue.type
            );
            setPrimaryInputFieldExchangeValue(result);
        }
    };

    return (
        <Container maxWidth='lg'>
            <FromField
                handleChange={handlePrimaryInputFieldChange}
                value={primaryInputFieldExchangeValue}
                label='currency'
            />
            <FromField
                handleChange={handleSecondaryInputFieldChange}
                value={secondaryInputFieldExchangeValue}
                label='currency'
            />
        </Container>
    );
}

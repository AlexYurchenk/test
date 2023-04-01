import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import s from './form-field.module.css';
import SelectField from '../select/select';
import { Currency } from '../form/form';
interface Prop {
    label: string;
    value: number | null;
    handleChange: (data: Currency) => void;
}
export default function FromField({ value, label, handleChange }: Prop) {
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState('');
    useEffect(() => {
        if (value) {
            setAmount(value);
        }
    }, [value]);

    const handleAmountChange = (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        const amount = Number(e.target.value);
        if (amount < 0) {
            return;
        }
        setAmount(amount);
        const result = { amount, type };
        handleChange(result);
    };
    const handleTypeChange = (data: string) => {
        setType(data);

        const result = { amount, type: data };
        handleChange(result);
    };

    return (
        <div className={s.form__field}>
            <TextField
                margin='none'
                required
                fullWidth
                name={label}
                label='Convert'
                type='number'
                id={label}
                value={amount}
                onChange={handleAmountChange}
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            />
            <SelectField label={label} handleChange={handleTypeChange} />
        </div>
    );
}

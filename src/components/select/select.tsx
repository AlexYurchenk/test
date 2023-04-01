import {
    FormControl,
    InputLabel,
    MenuItem,
    SelectChangeEvent,
    Select,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { getCurrencyLabel } from '../../services/api.service';
interface Props {
    handleChange: (type: string) => void;
    label: string;
}
export default function SelectField({ handleChange, label }: Props) {
    const [currentCurrency, setCurrentCurrency] = useState<string>('');
    const [currency, setCurrency] = useState<string[] | null>(null);
    const handleTypeChange = (event: SelectChangeEvent) => {
        setCurrentCurrency(event.target.value);
        handleChange(event.target.value);
    };
    useEffect(() => {
        const getCurrency = async () => {
            const data = await getCurrencyLabel();
            setCurrency(data);
        };
        getCurrency();
    }, []);

    return (
        <FormControl sx={{ m: 1, minWidth: 'auto' }}>
            <InputLabel id='from'>{label}</InputLabel>
            <Select
                labelId='from'
                id='from'
                value={currentCurrency}
                onChange={handleTypeChange}
                fullWidth
                label='currency'
                margin='none'
            >
                {currency &&
                    currency.map((e, i) => (
                        <MenuItem key={i} value={e}>
                            {e}
                        </MenuItem>
                    ))}
            </Select>
        </FormControl>
    );
}

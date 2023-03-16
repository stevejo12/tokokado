import React from 'react';
import { FormControl, MenuItem, Select } from '@mui/material';
import { Currency, useCurrency } from '../../context/CurrencyContext';

import "./CurrencyMenu.scss";

const CurrencyMenu = () => {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="currency__container">
      <FormControl className="currency-wrapper">
        <Select
          sx={{
            color: 'white',
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: 'white',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white',
            },
            '.MuiSvgIcon-root ': {
              fill: 'white',
            }
          }}
          MenuProps={{
            disableScrollLock: true,
          }}
          id="currency-select"
          value={currency}
          onChange={e => setCurrency(e.target.value as Currency)}
        >
          <MenuItem value="IDR">IDR</MenuItem>
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="CAD">CAD</MenuItem>
          <MenuItem value="SGD">SGD</MenuItem>
        </Select>
      </FormControl>
      
    </div>
  )
}

export default CurrencyMenu
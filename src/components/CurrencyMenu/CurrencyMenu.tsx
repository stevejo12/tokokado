import React, { useState, useContext } from 'react'
import { FormControl, MenuItem, Select } from '@mui/material'
import { Currency, useCurrency } from '../../context/CurrencyContext';

import "./CurrencyMenu.scss";

const CurrencyMenu = () => {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="currency__container">
      <FormControl className="currency-wrapper">
        <Select
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
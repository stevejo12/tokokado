import React, { useState } from 'react'
import { FormControl, MenuItem, Select } from '@mui/material'

import "./Currency.scss";

const Currency = () => {
  const [currency, setCurrency] = useState("USD");

  return (
    <div className="currency__container">
      <FormControl className="currency-wrapper">
        <Select
          id="currency-select"
          value={currency}
          onChange={e => setCurrency(e.target.value)}
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

export default Currency
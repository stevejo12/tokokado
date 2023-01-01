import React, { useState } from 'react';
import { CurrencyContext, Currency } from "./context/CurrencyContext"
import Header from './components/Header/Header';
// import Register from './routes/Register/Register';
import UserWishlist from './routes/UserWishlist/UserWishlist';

import './App.css';

function App() {
  const [currency, setCurrency] = useState(Currency.IDR);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency}}>
      <div className="app">
        <Header />
        <UserWishlist />
      </div>
    </CurrencyContext.Provider>
  );
}

export default App;

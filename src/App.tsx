import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CurrencyContext, Currency } from "./context/CurrencyContext"
import Header from './components/Header/Header';

// Routes
import Register from './routes/Register/Register';
import Login from './routes/Login/Login';
import UserWishlist from './routes/UserWishlist/UserWishlist';
import Home from './routes/Home/Home';

import './App.css';

function App() {
  const [currency, setCurrency] = useState(Currency.IDR);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      <div className="app">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/u/:username/wishlist" 
            element={[<Header />, <UserWishlist />]}
          />
          <Route path="/" element={[<Header />, <Home />]} />
        </Routes>
      </div>
    </CurrencyContext.Provider>
  );
}

export default App;

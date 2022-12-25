import React from 'react';
import Header from './components/Header/Header';
// import Register from './routes/Register/Register';
import UserWishlist from './routes/UserWishlist/UserWishlist';

import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <UserWishlist />
    </div>
  );
}

export default App;

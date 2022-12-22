import React from 'react';
import './App.css';
import Register from './routes/Register/Register';
import UserWishlist from './routes/UserWishlist/UserWishlist';

function App() {
  return (
    <div className="app">
      <UserWishlist />
    </div>
  );
}

export default App;

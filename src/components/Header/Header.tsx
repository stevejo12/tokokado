import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai"
import Logo from "../../assets/company-logo.jpg";
import CurrencyMenu from '../CurrencyMenu/CurrencyMenu';

import "./Header.scss";

const Header = () => {
  return (
    <div className="header__container">
      <div className="header__left">
        <img className="header__left-logo" src={Logo} alt="company-logo" />
        <p className="header__left-name">TOKOKADO</p>
      </div>
      <div className="header__right">
        <CurrencyMenu />
        <div className='header__right-cart-container'>
          <AiOutlineShoppingCart className="header__cart" />
        </div>
        <a href='/register'>Register</a>
        <a href='/login'>Login</a>
      </div>
    </div>
  )
}

export default Header
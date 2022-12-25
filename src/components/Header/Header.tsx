import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai"
import Logo from "../../assets/company-logo.jpg";
import Currency from '../Currency/Currency';

import "./Header.scss";

const Header = () => {
  return (
    <div className="header__container">
      <div className="header__left">
        <img className="header__left-logo" src={Logo} alt="company-logo" />
        <p className="header__left-name">KADO</p>
      </div>
      <div className="header__right">
        <Currency />
        <AiOutlineShoppingCart className="header__cart" />
      </div>
    </div>
  )
}

export default Header
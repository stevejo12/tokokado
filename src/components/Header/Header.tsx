import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
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
        <ShoppingCartOutlinedIcon sx={{ fontSize: "1.5rem", marginLeft: "4px"}} />
      </div>
    </div>
  )
}

export default Header
import React, { useEffect, useState } from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai"
import Logo from "../../assets/company-logo.jpg";
import CurrencyMenu from '../CurrencyMenu/CurrencyMenu';

import "./Header.scss";

const Header = () => {
  const [loginToken, setloginToken] = useState("");

  useEffect(() => {
    setloginToken(localStorage.getItem("KadoToken") || "");
    window.addEventListener("storage", handleToken)

    return () => {
      window.removeEventListener("storage", handleToken);
    }
  }, [])

  const handleToken = () => {
    setloginToken(localStorage.getItem("KadoToken") || "")
  }

  const handleSignOut = () => {
    localStorage.removeItem("KadoToken")
    window.dispatchEvent(new Event("storage"));
  }

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
        {!!!loginToken ? (
          <>
            <a className='header__options' href='/register'>Register</a>
            <a className='header__options' href='/login'>Login</a>
          </>
        ) : (
          <div className='header__options' onClick={handleSignOut}>
            Sign Out
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
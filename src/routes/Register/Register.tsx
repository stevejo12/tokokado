import React from 'react';
// import Logo from "../../assets/company-logo.jpg";
import Logo from "../../assets/company-logo.jpg";

import "./Register.scss";

const Register = () => {
  return (
    <div className="register__container">
      <div className="register__companyLogo">
        <img src={Logo} alt="company-logo" />
      </div>
      <div className="register__form">
        <span className="register__form-title">
          Create Account
        </span>
      </div>
    </div>
  )
}

export default Register
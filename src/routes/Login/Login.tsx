import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, FormControl, FormLabel, OutlinedInput } from '@mui/material';
import axios from '../../middleware/axios';
import Logo from "../../assets/company-logo.jpg";
import { ILoginForm, ILoginFormValid } from '../../models/user';
import { baseURL } from '../../data/constants';
import { validateLoginForm } from '../../helpers/validation';

import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState<ILoginForm>({
    email: "",
    password: ""
  })

  const [isLoginInfoInvalid, setIsLoginInfoInvalid] = useState<ILoginFormValid>({
    email: false,
    password: false
  })

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    const isThereEmptyField = validateLoginForm(loginInfo);

    if (isThereEmptyField.length === 0) {
      axios.post(`${baseURL}/user/getByLogin`, loginInfo)
        .then(res => {
          localStorage.setItem("KadoToken", res.data.data.token);
        })
        .then(() => {
          navigate("/")
        })
        .catch((err) => {
          alert("Error while trying to log in: " + err.response?.data?.data?.message);
        })
    } else {
      const defaultData: ILoginFormValid = isLoginInfoInvalid;
      
      for (var i=0; i < isThereEmptyField.length; i++) {
        defaultData[isThereEmptyField[i] as keyof ILoginFormValid] = true;
      }

      setIsLoginInfoInvalid({
        ...isLoginInfoInvalid,
        ...defaultData
      })
    }
  }

  const handleDataChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    const element = event.target as HTMLInputElement;

    setLoginInfo({
      ...loginInfo,
      [element.name]: element.value
    })

    if (!!element.value) {
      setIsLoginInfoInvalid({
        ...isLoginInfoInvalid,
        [element.name]: false
      })
    }
  }

  return (
    <div className='login__container'>
      <div className="login__companyLogo">
        <img src={Logo} alt="company-logo" />
      </div>
      <div className="login__form">
        <span className="login__form-title">
          Login to Kado's Account
        </span>
        <form onSubmit={e => handleLogin(e)} className="login__form-container">
          <FormControl className="login__form-fieldContainer"  variant="standard" fullWidth>
            <FormLabel htmlFor="login-email">Email</FormLabel>
            <OutlinedInput 
              value={loginInfo.email} 
              id="login-email"
              name="email" 
              onChange={e => handleDataChange(e)} 
            />
            {isLoginInfoInvalid.email && (
              <span className="login-errorText error">
                Please enter your email
              </span>
            )}
          </FormControl>
          <FormControl className="login__form-fieldContainer"  variant="standard" fullWidth>
            <FormLabel htmlFor="login-password">Password</FormLabel>
            <OutlinedInput 
              type="password"
              value={loginInfo.password}
              id="login-password"
              name="password"
              onChange={e => handleDataChange(e)} 
            />
            {isLoginInfoInvalid.password && (
              <span className="login-errorText error">
                Please enter your password
              </span>
            )}
          </FormControl>
          <Button type="submit" className="login__form-button" variant="contained" color="primary" fullWidth>Login</Button>
        </form>
      </div>
    </div>
  )
}

export default Login
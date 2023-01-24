import { Button, FormControl, FormLabel, Input, InputLabel, OutlinedInput } from '@mui/material';
import React, { useState } from 'react';
import Logo from "../../assets/company-logo.jpg";

import "./Register.scss";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  return (
    <div className="register__container">
      <div className="register__companyLogo">
        <img src={Logo} alt="company-logo" />
      </div>
      <div className="register__form">
        <span className="register__form-title">
          Create Account
        </span>
        <form className="register__form-container">
          <FormControl className="register__form-fieldContainer" variant="standard" fullWidth>
            <FormLabel htmlFor="register-username">Username</FormLabel>
            <OutlinedInput 
              id="register-username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl className="register__form-fieldContainer"  variant="standard" fullWidth>
            <FormLabel htmlFor="register-email">Email</FormLabel>
            <OutlinedInput 
              value={email} 
              id="register-email" 
              onChange={e => setEmail(e.target.value)} 
            />
          </FormControl>
          <FormControl className="register__form-fieldContainer"  variant="standard" fullWidth>
            <FormLabel htmlFor="register-password">Password</FormLabel>
            <OutlinedInput 
              type="password"
              value={password}
              id="register-password" 
              onChange={e => setPassword(e.target.value)} 
            />
          </FormControl>
          <Button className="register__form-button" variant="contained" color="primary" fullWidth>Register</Button>
        </form>
      </div>
    </div>
  )
}

export default Register
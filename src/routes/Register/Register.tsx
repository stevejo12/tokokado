import React, { useState } from 'react';
import { Button, FormControl, FormLabel, OutlinedInput } from '@mui/material';
import Logo from "../../assets/company-logo.jpg";
import { validateRegisterForm } from '../../helpers/validation';
import { IRegisterForm } from '../../models/user';

import "./Register.scss";

const Register = () => {
  const [registerForm, setRegisterForm] = useState<IRegisterForm>({
    username: "",
    email: "",
    password: ""
  });

  const handleSubmitRegister = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("submitted");

    const isThereEmptyField = validateRegisterForm(registerForm);

    if (!isThereEmptyField) {
      // TODO
      // continue to backend
    } else {
      // TODO
      // FIGURE OUT TO SHOW ERROR MESSAGE
      // error with error message probably?
    }

    console.log('value validation: ', isThereEmptyField);
  }

  const handleDataChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    const element = event.target as HTMLInputElement;

    setRegisterForm({
      ...registerForm,
      [element.name]: element.value
    })
  }

  return (
    <div className="register__container">
      <div className="register__companyLogo">
        <img src={Logo} alt="company-logo" />
      </div>
      <div className="register__form">
        <span className="register__form-title">
          Create Account
        </span>
        <form onSubmit={e => handleSubmitRegister(e)} className="register__form-container">
          <FormControl className="register__form-fieldContainer" variant="standard" fullWidth>
            <FormLabel htmlFor="register-username">Username</FormLabel>
            <OutlinedInput 
              id="register-username"
              value={registerForm.username}
              name="username"
              onChange={e => handleDataChange(e)}
            />
          </FormControl>
          <FormControl className="register__form-fieldContainer"  variant="standard" fullWidth>
            <FormLabel htmlFor="register-email">Email</FormLabel>
            <OutlinedInput 
              value={registerForm.email} 
              id="register-email"
              name="email" 
              onChange={e => handleDataChange(e)} 
            />
          </FormControl>
          <FormControl className="register__form-fieldContainer"  variant="standard" fullWidth>
            <FormLabel htmlFor="register-password">Password</FormLabel>
            <OutlinedInput 
              type="password"
              value={registerForm.password}
              id="register-password"
              name="password"
              onChange={e => handleDataChange(e)} 
            />
          </FormControl>
          <Button type="submit" className="register__form-button" variant="contained" color="primary" fullWidth>Register</Button>
        </form>
      </div>
    </div>
  )
}

export default Register
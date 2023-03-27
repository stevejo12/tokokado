import React, { useState } from 'react';
import { Button, FormControl, FormLabel, OutlinedInput } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import Logo from "../../assets/company-logo.jpg";
import axios from '../../middleware/axios';
import { baseURL } from '../../data/constants';
import { validateRegisterForm } from '../../helpers/validation';
import { IRegisterForm, IRegisterFormValid } from '../../models/user';

import "./Register.scss";

const Register = () => {
  const navigate = useNavigate();
  const [registerForm, setRegisterForm] = useState<IRegisterForm>({
    username: "",
    email: "",
    password: ""
  });

  const [isFormValid, setIsFormValid] = useState<IRegisterFormValid>({
    username: false,
    email: false,
    password: false,
  });

  const handleSubmitRegister = (event: React.FormEvent) => {
    event.preventDefault();

    const isThereEmptyField = validateRegisterForm(registerForm);

    if (isThereEmptyField.length === 0) {
      axios.post(`${baseURL}/user/add`, registerForm)
        .then(() => {
          navigate("/")
        })
        .catch((err) => {
          alert("Error while trying to add user: " + err.response?.data?.data?.message);
        })
    } else {
      const defaultData: IRegisterFormValid = isFormValid;
      for (var i=0; i < isThereEmptyField.length; i++) {
        defaultData[isThereEmptyField[i] as keyof IRegisterFormValid] = true;
      }

      setIsFormValid({
        ...isFormValid,
        ...defaultData
      })
    }
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

    if (!!element.value) {
      setIsFormValid({
        ...isFormValid,
        [element.name]: false
      })
    }
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
            {isFormValid.username && (
              <span className="register-errorText error">
                Please enter your username
              </span>
            )}
          </FormControl>
          <FormControl className="register__form-fieldContainer"  variant="standard" fullWidth>
            <FormLabel htmlFor="register-email">Email</FormLabel>
            <OutlinedInput 
              value={registerForm.email} 
              id="register-email"
              name="email" 
              onChange={e => handleDataChange(e)} 
            />
            {isFormValid.email && (
              <span className="register-errorText error">
                Please enter your email
              </span>
            )}
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
            {isFormValid.password && (
              <span className="register-errorText error">
                Please enter your password
              </span>
            )}
          </FormControl>
          <Button type="submit" className="register__form-button" variant="contained" color="primary" fullWidth>Register</Button>
        </form>
      </div>
    </div>
  )
}

export default Register
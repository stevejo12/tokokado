import { IForm, IRegisterForm } from "../models/user";

const validateRegisterForm = (registerForm: IRegisterForm) => {
  // FORM VAlIDITY ON FRONTEND
  // SHOULD BE ONLY LIMIT TO EMPTY OR NOT
  // WHILE ON BACKEND CHECK THE INTEGRITY OF THE DATA INPUT
  // EX: VALID EMAIL, PASSWORD LENGTH, USERNAME USED OR NOT, ETC.
  
  const formKeys = Object.keys(registerForm);

  const listEmptyKeys: string[] = formKeys.filter(key => {
    const value = registerForm[key as keyof IRegisterForm];

    // return boolean if value is not ""
    return !!!value;
  })

  return listEmptyKeys;
}

const validateLoginForm = (loginForm: IForm) => {
  const formKeys = Object.keys(loginForm);

  const listEmptyKeys: string[] = formKeys.filter(key => {
    const value = loginForm[key as keyof IForm];

    // return boolean if value is not ""
    return !!!value;
  })

  return listEmptyKeys;
}

export { validateRegisterForm, validateLoginForm };
import { IRegisterForm } from "../models/user";

const validateRegisterForm = (registerForm: IRegisterForm) => {
  const isThereEmptyVariable = Object.values(registerForm).some(x => x === "" || x === undefined )

  return isThereEmptyVariable;
}

export { validateRegisterForm };
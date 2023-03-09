export interface IForm {
  email: string;
  password: string;
}

export interface IRegisterForm extends IForm {
  username: string;
}

export interface IRegisterFormValid {
  username: boolean;
  email: boolean;
  password: boolean;
}

export interface ILoginForm {
  email: string;
  password: string;
}

export interface ILoginFormValid {
  email: boolean;
  password: boolean;
}

export enum HTTPRequest {
  get,
  post,
  put,
  delete
}
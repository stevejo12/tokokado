export interface IRegisterForm {
  username: string;
  email: string;
  password: string;
}

export interface IRegisterFormValid {
  username: boolean;
  email: boolean;
  password: boolean;
}

export enum HTTPRequest {
  get,
  post,
  put,
  delete
}
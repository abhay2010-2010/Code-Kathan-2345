import { IArticle } from "../dataContext/types";

export interface IUser {
  email: string;
  name: string;
  role: string;
  id?: number;
  Phone: number;
  password?: string;
  image?: string;
  history?: IArticle[];
  address: {
    address_line: string;
    city: string;
    state: string;
    postcode: number;
    country: string;
  };
}

export interface IUserPatch {
  email?: string;
  name?: string;
  role?: string;
  id?: number;
  Phone?: number;
  password?: string;
  image?: string;
  history?: IArticle[];
  address?: {
    address_line?: string;
    city?: string;
    state?: string;
    postcode?: number;
    country?: string;
  };
}

export interface ICredentials {
  name?: string;
  email: string;
  password: string;
}

export interface IAuth {
  user?: IUser;
  accessToken?: string;
  loginLoading: boolean;
  loginError: boolean;
  isAuth: boolean;
}

export const initalState: IAuth = {
  loginLoading: false,
  loginError: false,
  isAuth: false,
};

export interface IAuthContext {
  authState: IAuth;
  users: IUser[];
  totalUsers: number | undefined;
  loginUser: (credential: ICredentials) => Promise<string>;
  signupUser: (credential: ICredentials) => Promise<string>;
  logoutUser: () => Promise<string>;
  patchUser: (credential: IUserPatch) => Promise<string>;
  getUsers: () => Promise<string>;
  deleteUser: (id: number) => Promise<string>;
}

export const authContextInitial: IAuthContext = {
  authState: initalState,
  users: [],
  totalUsers: undefined,
  loginUser: () => new Promise<string>(() => {}),
  signupUser: () => new Promise<string>(() => {}),
  logoutUser: () => new Promise<string>(() => {}),
  patchUser: () => new Promise<string>(() => {}),
  getUsers: () => new Promise<string>(() => {}),
  deleteUser: () => new Promise<string>(() => {}),
};

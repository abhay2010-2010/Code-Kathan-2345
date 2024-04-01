export interface IUser {
  email: string;
  name: string;
  role: string;
  id?: number;
  Phone: number;
  password?: string;
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
  id: number;
  Phone?: number;
  password?: string;
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
  loginUser: (credential: ICredentials) => Promise<string> | undefined;
  signupUser: (credential: ICredentials) => Promise<string> | undefined;
  logoutUser: (credential: ICredentials) => Promise<string> | undefined;
  patchUser: (credential: IUserPatch) => Promise<string> | undefined;
  getUsers: () => Promise<string>;
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
};

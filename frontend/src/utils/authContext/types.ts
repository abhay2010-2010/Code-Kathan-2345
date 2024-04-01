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

export interface IAuth {
  user?: IUser;
  accessToken?: string;
  loginLoading?: boolean;
  loginError?: boolean;
  isAuth?: boolean;
}

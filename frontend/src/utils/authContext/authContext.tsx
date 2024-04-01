import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";
import { baseUrl } from "../baseUrl";
import { IAuth, IUser, IUserPatch } from "./types";
import { produce } from "immer";
type Props = {
  children: React.ReactNode;
};

const initalState: IAuth = {
  loginLoading: false,
  loginError: false,
  isAuth: false,
};
export interface ICredentials {
  name?: string;
  email: string;
  password: string;
}

interface IAuthContext {
  authState: IAuth;
  loginUser: (credential: ICredentials) => Promise<string>;
  signupUser: (credential: ICredentials) => Promise<string>;
  logoutUser: (credential: ICredentials) => Promise<string>;
  patchUser: (credential: IUserPatch) => Promise<string>;
}

const AuthContext = createContext<IAuthContext>({
  authState: initalState,
  loginUser: (credentials: ICredentials) =>
    new Promise<string>((resolve, reject) => {}),
  signupUser: (credentials: ICredentials) =>
    new Promise<string>((resolve, reject) => {}),
  logoutUser: () => new Promise<string>((resolve, reject) => {}),
  patchUser: (credentials: IUserPatch) =>
    new Promise<string>((resolve, reject) => {}),
});

const getLocalStorage = () => {
  const user = localStorage.getItem("user");
  const accessToken = localStorage.getItem("accessToken");
  if (user && accessToken) {
    return { accessToken: JSON.parse(accessToken), user: JSON.parse(user) };
  } else {
    return { accessToken: null, user: null };
  }
};

const writeLocalStorage = (user, accessToken) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("accessToken", JSON.stringify(accessToken));
};

export const AuthProvider = ({ children }: Props) => {
  const [authState, setAuthState] = useState<IAuth>(initalState);

  const loginUser = (credentials: ICredentials) => {
    setAuthState((prev) => ({ ...prev, loginLoading: true }));
    return new Promise<string>((resolve, reject) => {
      axios
        .post(baseUrl + "/login", credentials)
        .then((res) => {
          setAuthState((prev) => ({
            ...prev,
            loginLoading: false,
            user: res.data.user,
            accessToken: res.data.accessToken,
            loginError: false,
          }));
          writeLocalStorage(res.data.user, res.data.accessToken);
          resolve(`Welcome ${res.data.user.name}`);
        })
        .catch((error) => {
          setAuthState((prev) => ({
            ...prev,
            loginLoading: false,
            loginError: true,
          }));
          console.log(error);
          reject("Error");
        });
    });
  };

  const signupUser = (credentials: ICredentials) => {
    const obj: IUser = {
      name: credentials.name,
      email: credentials.email,
      password: credentials.password,
      Phone: 1578945845,
      role: "user",
      address: {
        address_line: "Srinagar",
        city: "srinagar",
        state: "J&k",
        postcode: 190876,
        country: "India",
      },
    };

    return new Promise<string>((resolve, reject) => {
      axios
        .post(baseUrl + "/signup", obj)
        .then((res) => {
          setAuthState((prev) => ({
            ...prev,
            loginLoading: false,
            user: res.data.user,
            accessToken: res.data.accessToken,
            loginError: false,
          }));
          writeLocalStorage(res.data.user, res.data.accessToken);
          resolve(`Welcome ${res.data.user.name}`);
        })
        .catch((error) => {
          setAuthState((prev) => ({
            ...prev,
            loginLoading: false,
            loginError: true,
          }));
          console.log(error);
          reject("Error");
        });
    });
  };

  const patchUser = (credentials: IUserPatch) => {
    setAuthState((prev) => {
      return produce(prev, (draft) => {
        draft.loginLoading = true;
        draft.loginError = false;
      });
    });
    return new Promise<string>((resolve, reject) => {
      axios
        .put(baseUrl + `/users/${credentials.id}`, credentials)
        .then((res) => {
          setAuthState((prev) => {
            return produce(prev, (draft) => {
              draft.loginLoading = false;
              draft.loginError = false;
              draft.user = res.data.user;
            });
          });
          writeLocalStorage("user", res.data);
          resolve("Success");
        })
        .catch((err) => {
          setAuthState((prev) => ({ ...prev, loginLoading: false }));
          reject("Failed");
        });
    });
  };

  const logoutUser = () => {
    setAuthState((prev) => ({
      ...prev,
      loginLoading: true,
    }));
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        setAuthState(initalState);
        resolve("Logged Out");
      }, 1000);
    });
  };

  useEffect(() => {
    let data = getLocalStorage();
    if (data?.accessToken && data?.user.name) {
      setAuthState((prev) => ({
        ...prev,
        user: data.user,
        accessToken: data.accessToken,
        isAuth: true,
      }));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authState,
        loginUser,
        signupUser,
        logoutUser,
        patchUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

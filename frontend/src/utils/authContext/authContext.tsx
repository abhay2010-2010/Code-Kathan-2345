import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";
import {
  IAuth,
  IAuthContext,
  ICredentials,
  IUser,
  IUserPatch,
  authContextInitial,
  initalState,
} from "./types";
type Props = {
  children: React.ReactNode;
};

const AuthContext = createContext<IAuthContext>(authContextInitial);

const getLocalStorage = () => {
  const user = localStorage.getItem("user");
  const accessToken = localStorage.getItem("accessToken");
  if (user && accessToken) {
    return { accessToken: JSON.parse(accessToken), user: JSON.parse(user) };
  } else {
    return { accessToken: null, user: null };
  }
};

const writeLocalStorage = (user: IUser, accessToken: string) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("accessToken", JSON.stringify(accessToken));
};

export const AuthProvider = ({ children }: Props) => {
  const [authState, setAuthState] = useState<IAuth>(initalState);
  const [users, setUsers] = useState<IUser[]>([]);
  const [totalUsers, setTotalUsers] = useState<number | undefined>(undefined);

  const getUsers = () => {
    setAuthState((prev) => ({ ...prev, loginLoading: true }));
    let params = window.location.href;
    params = params.slice(params.indexOf("?"));
    let url = baseUrl + `/users?${params}`;
    return new Promise<string>((resolve, reject) => {
      axios
        .get(url)
        .then((res) => {
          setUsers(res.data);
          const { "x-total-count": total } = res.headers;
          setTotalUsers(total);
          setAuthState((prev) => ({
            ...prev,
            loginLoading: false,
            loginError: false,
          }));
          resolve("success");
        })
        .catch(() => {
          setAuthState((prev) => ({
            ...prev,
            loginLoading: false,
            loginError: true,
          }));
          reject("fail");
        });
    });
  };

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
            isAuth: true,
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
      name: credentials.name || "",
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
            isAuth: true,
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
      return {
        ...prev,
        loginLoading: true,
        loginError: false,
      };
    });
    // console.log(credentials);
    return new Promise<string>((resolve, reject) => {
      axios
        .patch(baseUrl + `/users/${credentials.id}`, credentials)
        .then(async (res) => {
          await getUsers();
          setAuthState((prev) => {
            return {
              ...prev,
              loginLoading: false,
              loginError: false,
              user: res.data,
            };
          });
          localStorage.setItem("user", JSON.stringify(res.data));
          // console.log(res.data);
          resolve("Success");
        })
        .catch((error) => {
          setAuthState((prev) => ({ ...prev, loginLoading: false }));
          console.log(error);
          reject("Failed");
        });
    });
  };

  const logoutUser = () => {
    setAuthState((prev) => ({
      ...prev,
      loginLoading: true,
    }));
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        setAuthState(initalState);
        resolve("Logged Out");
      }, 1000);
    });
  };

  const deleteUser = (id: number) => {
    setAuthState((prev) => ({
      ...prev,
      loginLoading: true,
    }));
    return new Promise<string>((resolve, reject) => {
      axios
        .delete(baseUrl + `/users/${id}`)
        .then(async () => {
          await getUsers();
          setAuthState((prev) => {
            return {
              ...prev,
              loginLoading: false,
              loginError: false,
            };
          });
          resolve("success");
        })
        .catch(() => {
          setAuthState((prev) => {
            return {
              ...prev,
              loginLoading: false,
              loginError: true,
            };
          });
          reject("fail");
        });
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
        users,
        totalUsers,
        loginUser,
        signupUser,
        logoutUser,
        patchUser,
        getUsers,
        deleteUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

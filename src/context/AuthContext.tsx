import { ISignInParams, ISignUpParams } from "../interfaces/auth.interface";
import { ReactNode, createContext, useEffect, useState } from "react";
import {
  destroyAuthCookies,
  updateAuthCookies,
} from "../utils/handleAuthCookies";

import { IUser } from "../interfaces/user.interface";
import Router from "next/router";
import { api } from "../services/api";
import { parseCookies } from "nookies";
import toast from "react-hot-toast";

interface AuthContextData {
  user: IUser;
  isAuthenticated: boolean;
  handleSignIn: (values: ISignInParams) => Promise<boolean>;
  handleSignUp: (values: ISignUpParams) => Promise<boolean>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const handleSignOut = (ctx = undefined) => {
  destroyAuthCookies(ctx);

  Router.reload();
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser>();
  const isAuthenticated = !!user;

  const handleSignIn = async (values: ISignInParams) => {
    try {
      const { data } = await api.post("/session", values);

      updateAuthCookies(data.token);

      api.defaults.headers = {
        Authorization: `Bearer ${data.token}`,
      };

      setUser(data.user);

      return true;
    } catch (error) {
      if (error.response.data.message === "Invalid credentials") {
        toast.error("Email/senha inválidos");
      }

      return false;
    }
  };

  const handleSignUp = async (values: ISignUpParams) => {
    try {
      await api.post("/user", values);

      const success = await handleSignIn({
        email: values.email,
        password: values.password,
      });

      return success;
    } catch (error) {
      console.log(error.response);

      return false;
    }
  };

  useEffect(() => {
    const cookies = parseCookies();

    if (cookies["upfi.token"]) {
      (async () => {
        try {
          const { data } = await api.get("/session");

          setUser(data);
        } catch {
          handleSignOut();
        }
      })();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, handleSignIn, handleSignUp }}
    >
      {children}
    </AuthContext.Provider>
  );
}

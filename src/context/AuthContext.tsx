import { ReactNode, createContext, useEffect, useState } from "react";

import { ISignInParams } from "../interfaces/auth.interface";
import { IUser } from "../interfaces/user.interface";
import { api } from "../services/api";
import { parseCookies } from "nookies";
import toast from "react-hot-toast";
import { updateAuthCookies } from "../utils/handleAuthCookies";

interface AuthContextData {
  user: IUser;
  isAuthenticated: boolean;
  handleSignIn: (values: ISignInParams) => Promise<boolean>;
}

interface AuthProviderProps {
  children: ReactNode;
}

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

  useEffect(() => {
    const cookies = parseCookies();

    if (cookies["upfi.token"]) {
      (async () => {
        const { data } = await api.get("/session");

        setUser(data);
      })();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, handleSignIn }}>
      {children}
    </AuthContext.Provider>
  );
}

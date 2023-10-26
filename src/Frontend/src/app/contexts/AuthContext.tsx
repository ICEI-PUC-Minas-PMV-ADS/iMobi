import { createContext, useCallback, useState } from "react";
import { localStorageKeys } from "../config/localStorageKeys";

interface AuthContextValue {
  signedIn: boolean;
  login(token: string): void;
  logout(): void;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedToken = localStorage.getItem(localStorageKeys.TOKEN);

    return Boolean(storedToken);
  });

  const login = useCallback((token: string) => {
    localStorage.setItem(localStorageKeys.TOKEN, token);

    setSignedIn(true);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.TOKEN);
    setSignedIn(false)
  }, []);

  return (
    <AuthContext.Provider value={{ signedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

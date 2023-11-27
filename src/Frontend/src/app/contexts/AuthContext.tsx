import { createContext, useCallback, useEffect, useState } from "react";
import { localStorageKeys } from "../config/localStorageKeys";
import { useQuery } from "@tanstack/react-query";
import { userService } from "../services/userService";
import toast from "react-hot-toast";


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

  const { isError, isFetching, isSuccess } = useQuery({
    queryKey: ['users', 'validate'],
    queryFn: () => userService.validate(),
    enabled: signedIn,
    staleTime: Infinity,
  });

  const login = useCallback((token: string) => {
    localStorage.setItem(localStorageKeys.TOKEN, token);

    setSignedIn(true);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.TOKEN);
    localStorage.removeItem(localStorageKeys.USER_ID);
    localStorage.removeItem(localStorageKeys.EMAIL);
    localStorage.removeItem(localStorageKeys.NAME);

    setSignedIn(false)
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error('Sua sessão expirou!')

      logout();
    }
  }, [isError, logout])


  return (
    <AuthContext.Provider
      value={{
        signedIn: isSuccess && signedIn,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

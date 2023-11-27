import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../app/hooks/useAuth";
import { localStorageKeys } from "../app/config/localStorageKeys";

interface AuthGuardProps {
  isPrivate: boolean;
}

export function AuthGuard({ isPrivate }: AuthGuardProps) {
  const userId = localStorage.getItem(localStorageKeys.USER_ID)
  const { signedIn } = useAuth();

  if (!signedIn && isPrivate) {
    return <Navigate to="/login" replace />
  }

  if (signedIn && !isPrivate) {
    return <Navigate to={`/perfil/${userId}`} />
  }

  return <Outlet />
}

import { Outlet, Navigate } from "react-router-dom";

interface AuthGuardProps {
    isPrivate: boolean;
}

export function AuthGuard({ isPrivate }: AuthGuardProps) {
    const signIn = false;

    if (!signIn && isPrivate) {
        return <Navigate to="/login" replace />
    }

    return <Outlet />
}
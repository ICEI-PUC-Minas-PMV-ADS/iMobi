import { Routes, Route, BrowserRouter, Outlet, Navigate } from "react-router-dom";

interface AuthGuardProps {
    isPrivate: boolean;
}

function AuthGuard({ isPrivate }: AuthGuardProps) {
    const signIn = false;

    if (!signIn && isPrivate) {
        return <Navigate to="/login" />
    }

    if (signIn && !isPrivate) {
        return <Navigate to="/perfil" />
    }

    return <Outlet />
}

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthGuard isPrivate={false} />}>
                    <Route path="/login" element={<h1>Login</h1>} />
                    <Route path="/cadastro" element={<h1>Cadastre-se</h1>} />

                    <Route path="/" element={<h1>Home</h1>} />
                </Route>

                {/* Protected Routes */}

                <Route element={<AuthGuard isPrivate={true} />}>
                    <Route path="/perfil" element={<h1>Usuario/Perfil</h1>} />
                    <Route path="/imovel/cadastro" element={<h1>Cadastrar um imovel</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
import { Routes, Route, BrowserRouter } from "react-router-dom";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<h1>Login</h1>} />
                <Route path="/cadastro" element={<h1>Cadastre-se</h1>} />

                <Route path="/" element={<h1>Dashboard</h1>} />
            </Routes>
        </BrowserRouter>
    )
}
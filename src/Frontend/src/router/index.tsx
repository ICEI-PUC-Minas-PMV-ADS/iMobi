import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthGuard } from "./AuthGuard";
import { LoginPage } from "../view/pages/Login";
import { CadastroPage } from "../view/pages/Cadastro";
import { HomePage } from "../view/pages/Home";
import { PerfilPage } from "../view/pages/Perfil";
import { CadastroImovelPage } from "../view/pages/CadastroImovel";
import { AuthLayout } from "../view/layouts/AuthLayout";
import { RecuperarSenhaPage } from "../view/pages/EsqSenha";
import { Header } from "../view/components/Header";

export function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cadastro" element={<CadastroPage />} />
            <Route path="/esqSenha" element={<RecuperarSenhaPage />} />
          </Route>
        </Route>

        {/* Protected Routes */}

        <Route element={<AuthGuard isPrivate={true} />}>
          <Route path="/perfil" element={<PerfilPage />} />
          <Route path="/imovel/cadastro" element={<CadastroImovelPage />} />
        </Route>
      </Routes>
      <footer>Footer</footer>
    </BrowserRouter>
  )
}

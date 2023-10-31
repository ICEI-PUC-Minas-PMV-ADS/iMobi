import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthGuard } from "./AuthGuard";
import { LoginPage } from "../view/pages/Login";
import { CadastroPage } from "../view/pages/Cadastro";
import { HomePage } from "../view/pages/Home";
import { FeedPage } from "../view/pages/Feed";
import { PerfilPage } from "../view/pages/Perfil";
import { CadastroImovelPage } from "../view/pages/CadastroImovel";
import { AuthLayout } from "../view/layouts/AuthLayout";
import { RecuperarSenhaPage } from "../view/pages/EsqSenha";
import { Header } from "../view/components/Header";
import { Galeria } from "../view/pages/Galeria";
import Footer from "../view/components/Footer";

export function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/perfil/:userId" element={<PerfilPage />} />
        <Route path="/feed/:cidade" element={<FeedPage />} />
        <Route path="/imoveis" element={<FeedPage />} />


        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cadastro" element={<CadastroPage />} />
            <Route path="/esqSenha" element={<RecuperarSenhaPage />} />
          </Route>
        </Route>
        {/* Protected Routes */}

        <Route element={<AuthGuard isPrivate={true} />}>
          <Route path="/imovel/cadastro" element={<CadastroImovelPage />} />
          <Route path="/galeria" element={<Galeria />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

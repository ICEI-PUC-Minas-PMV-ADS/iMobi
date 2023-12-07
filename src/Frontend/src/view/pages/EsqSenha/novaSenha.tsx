// RedefinirSenhaPage.jsx
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useRedefinirSenhaController } from "./useRedefSenha";
import { Link } from "react-router-dom";

export function NovaSenha() {
    const { handleSubmit, register, errors } = useRedefinirSenhaController();
  
    // Obtém o email da localStorage
    const emailFromLocalStorage = localStorage.getItem("email");
  
    return (
        <div className="container mx-auto mt-8 flex flex-col items-center justify-center h-screen">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <header className="mb-4">
              <h1 className="text-2xl font-bold text-center mb-4">
                Redefinir Senha
              </h1>
              <p className="text-center text-gray-600">
                Informe a nova senha para redefinir.
              </p>
            </header>
    
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {/* Adiciona um campo hidden para armazenar o email */}
              <input type="hidden" {...register("email")} value={emailFromLocalStorage || ""} />
    
              <Input
                error={errors.password?.message}
                type="password"
                placeholder="Nova Senha"
                {...register("password")}
              />
    
              <Input
                error={errors.confirmPassword?.message}
                type="password"
                placeholder="Confirmar Nova Senha"
                {...register("confirmPassword")}
              />
    
              <Button type="submit">Redefinir Senha</Button>
            </form>
    
            <p className="text-center mt-4">
              Já lembrou a senha? <Link to="/login">Faça login</Link>.
            </p>
          </div>
        </div>
    );
}

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useEsqSenhaController } from "./useEsqSenhaController";

export function RecuperarSenhaPage() {
  const { handleSubmit, register, errors } = useEsqSenhaController();

  const handleFormSubmit = (data: any) => {
    handleSubmit(data);
  };

  return (
    <div className="container mx-auto mt-8 flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <header className="mb-4">
          <h1 className="text-2xl font-bold text-center mb-4">
            Esqueci minha senha
          </h1>
          <p className="text-center text-gray-600">
            Para redefinir sua senha, informe o e-mail cadastrado para prosseguir.
          </p>
        </header>

        <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
          <Input
            error="Informe o email"
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && <small className="text-red-500">{errors.email.message}</small>}

          <Button type="submit">Recuperar</Button>
        </form>
      </div>
    </div>
  );
}

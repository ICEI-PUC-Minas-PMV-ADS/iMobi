import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useLoginController } from "./useLoginController";

export function LoginPage() {
  const { handleSubmit, register, errors, isPending } = useLoginController();

  return (
    <>
      <header>
        <h1
          className="text-center w-full text-xl">
          <strong>Olá, <br /></strong>faça login e comece a cadastrar os seus imóveis agora mesmo
        </h1>
      </header>

      <form
        onSubmit={handleSubmit}
        className="mt-[35px] flex flex-col gap-4">
        <Input
          error={errors.email?.message}
          type="email"
          placeholder="Email"
          {...register('email')} />

        <Input
          error={errors.password?.message}
          type="password"
          placeholder="Senha"
          {...register('password')}
        />

        <Button
          isPending={isPending}
          type="submit">Entrar</Button>
      </form>

      <div className="text-center mt-4">
        <Link to="/esqSenha" className="text-blue-500 underline hover:text-blue-400 transition-all duration-300"><small>Esqueci minha senha.</small></Link>
        <h3 className="mt-4">Já possui uma conta? <Link className="text-blue-500 underline hover:text-blue-400 transition-all duration-300" to="/cadastro">Cadastre-se.</Link></h3>
      </div>
    </>
  )
}

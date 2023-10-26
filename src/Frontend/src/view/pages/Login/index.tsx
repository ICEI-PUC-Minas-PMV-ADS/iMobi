import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useLoginController } from "./useLoginController";

export function LoginPage() {
  const { handleSubmit, register, errors } = useLoginController();

  console.log(errors)

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


        <Button type="submit">Entrar</Button>
      </form>
    </>
  )
}

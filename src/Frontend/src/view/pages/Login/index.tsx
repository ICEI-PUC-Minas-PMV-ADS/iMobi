import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function LoginPage() {
  return (
    <>
      <header>
        <h1 className="text-center w-full text-xl">
          <strong>Olá, <br /></strong>faça login e comece a cadastrar os seus imóveis agora mesmo
        </h1>
      </header>

      <form className="mt-[35px] flex flex-col gap-4">
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Senha" />
        <Button type="submit">Entrar</Button>
      </form>
    </>
  )
}

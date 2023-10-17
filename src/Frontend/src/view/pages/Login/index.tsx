import { Input } from "../../components/Input";

export function LoginPage() {
  return (
    <div>
      <header>
        <h1 className="text-center w-full text-xl">
          <strong>Olá, <br /></strong>faça login e comece a cadastrar os seus imóveis agora mesmo
        </h1>
      </header>

      <form className="mt-[35px] flex flex-col gap-4">
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Senha" />
        <button className="mt-2" type="submit">Entrar</button>
      </form>
    </div>
  )
}

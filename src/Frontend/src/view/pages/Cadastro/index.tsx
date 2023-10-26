import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Switch } from "../../components/Switch";
import { useCadastroController } from "./useCadastroController";

export function CadastroPage() {
  const { handleSubmit, register, errors, isChecked, handleSwitchChange, isPending } = useCadastroController();

  return (
    <>
      <header className="mb-[16px]">
        <h1 className="text-center w-full text-xl">
          <strong>Encontre os melhores imóveis.<br /></strong>Cadastre-se e comece a sua busca!
        </h1>
      </header>

      <div>
        <small>Você é corretor de imóveis?</small>
        <Switch
          onChange={handleSwitchChange}
          isChecked={isChecked} />
      </div>

      <form onSubmit={handleSubmit} className="mt-[16px] flex flex-col gap-4">
        <Input
          error={errors.nome?.message}
          type="text"
          placeholder="Nome"
          {...register("nome")}
        />
        <Input
          error={errors.email?.message}
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        <Input
          error={errors.password?.message}
          type="password"
          placeholder="Senha"
          {...register("password")}
        />
        <Input
          error={errors.cpfcnpj?.message}
          type="text"
          placeholder="CPF/CNPJ"
          {...register("cpfcnpj")} />
        {!isChecked ? null : (
          <Input
            error={errors.creci?.message}
            type="text"
            placeholder="CRECI"
            {...register("creci")} />
        )}
        <Button isPending={isPending} type="submit">Cadastre-se</Button>
      </form>
    </>
  )
}

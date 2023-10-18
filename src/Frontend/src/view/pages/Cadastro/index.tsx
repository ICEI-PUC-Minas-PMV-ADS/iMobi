import { useState } from "react";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Switch } from "../../components/Switch";

export function CadastroPage() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <header className="mb-[16px]">
        <h1 className="text-center w-full text-xl">
          <strong>Encontre os melhores imóveis.<br /></strong>Cadastre-se e comece a sua busca!
        </h1>
      </header>

      <div>
        <small>Você é corretor de imóveis?</small>
        <Switch isChecked={isChecked} setIsChecked={setIsChecked} />
      </div>

      <form className="mt-[16px] flex flex-col gap-4">
        <Input name="name" type="text" placeholder="Nome" />
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Senha" />
        <Input name="cpfcnpj" type="text" placeholder="CPF/CNPJ" />
        {!isChecked ? null : (
          <Input name="creci" type="text" placeholder="CRECI" />
        )}
        <Button type="submit">Cadastre-se</Button>
      </form>
    </>
  )
}

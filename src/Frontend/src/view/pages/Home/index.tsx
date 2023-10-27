import { Button } from "../../components/Button";
import { ImmovelCard } from "../../components/ImovelCard";
import { Input } from "../../components/Input";
import { Switch } from "../../components/Switch";

export function HomePage() {
  return (
    <div className="container mx-auto">
      <div className="p-4 md:p-0 w-full lg:w-1/3 md:w-1/2 container mx-auto">
        <form>
          <div className="mb-4">
            <Switch
              small="O quê você está buscando?"
              isChecked={false}
              onChange={() => 'mudou'} />
          </div>
          <Input
            error=""
            type="email"
            placeholder="Busque por cidade"
            name="cidade"
          />
          <Button className="w-full">Buscar imóveis</Button>
        </form>
      </div>

      <div className="mt-10">
        <header>
          <h1 className="font-bold text-center text-xl">Confira os imóveis mais recentes</h1>
        </header>
        <div className="flex justify-center items-center">
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 p-8 overflow-x-auto">
            <ImmovelCard />
            <ImmovelCard />
            <ImmovelCard />
            <ImmovelCard />
          </div>
        </div>
      </div>
    </div>
  )
}

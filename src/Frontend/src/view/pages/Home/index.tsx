import CityAutocomplete from "../../components/CityAutocomplete";
import { ImmovelCard } from "../../components/ImovelCard";
import { Switch } from "../../components/Switch";
import { useHomeController } from "./useHomeController";

export function HomePage() {
  const { imoveis } = useHomeController();

  const imoveisRecentes = imoveis.slice(0, 3);

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
          <div>
            <h1>Busque por Estado e Cidade</h1>
              <CityAutocomplete />
          </div>
        </form>
      </div>

      <div className="mt-10">
        <header>
          <h1 className="font-bold text-center text-xl">Confira os imóveis mais recentes</h1>
        </header>
        <div className="flex justify-center items-center">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 p-8 overflow-x-auto">
            {imoveisRecentes.length <= 0 && <p>Não há imóveis recentes cadastrados.</p>}

            {
              imoveisRecentes.map((imovel) => {
                return (
                  <li className="list-none" key={imovel.id}>
                    <ImmovelCard
                      // src={imagens}
                      cidade={imovel.endereco.cidade}
                      bairro={imovel.endereco.bairro}
                      detalhes={imovel.detalhes}
                      finalidade={imovel.finalidade}
                      valorAluguel={imovel.valorAluguel}
                      quartos={imovel.quartos}
                      areaTotal={imovel.areaTotal}
                      suites={imovel.suites}
                    />
                  </li>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

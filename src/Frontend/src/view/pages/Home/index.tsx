import { Button } from "../../components/Button";
import CityAutocomplete from "../../components/CityAutocomplete";
import { ImmovelCard } from "../../components/ImovelCard";
import { PageLoader } from "../../components/PageLoader";

import { useHomeController } from "./useHomeController";

export function HomePage() {
  const { imoveis, url, isFetching, isLoadingImagens } = useHomeController();

  if (isFetching) {
    return <PageLoader isLoading={isFetching} />
  }

  return (
    <div className="container mx-auto">
      <div className="p-4 md:p-0 w-full lg:w-1/3 md:w-1/2 container mx-auto">
        <h1 className="text-center mb-10 font-bold text-xl">🔍 Comece a sua busca agora mesmo</h1>
        <form>
          <CityAutocomplete />
          <Button className="w-full">Buscar imóveis</Button>
        </form>
      </div>

      <div className="mt-10">
        <header>
          <h1 className="font-bold text-center text-xl">🏢 Confira os imóveis mais recentes</h1>
        </header>
        <div className="flex justify-center items-center">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 p-8 overflow-x-auto">
            {imoveis.length <= 0 && <p>Não há imóveis recentes cadastrados.</p>}

            {
              imoveis.map((imovel, index) => {
                return (
                  <li className="list-none" key={imovel.id}>
                    <ImmovelCard
                      isLoading={isLoadingImagens}
                      src={url[index]}
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
              }).reverse().slice(0, 3)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

import CityAutocomplete from "../../components/CityAutocomplete";
import { ImmovelCard } from "../../components/ImovelCard";
import { useHomeController } from "./useHomeController";
import { useNavigate } from "react-router-dom";


export function HomePage() {
  const { imoveis, urlByImovelId, isLoadingImagens } = useHomeController();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto">
      <div className="p-4 md:p-0 w-full lg:w-1/3 md:w-1/2 container mx-auto">
        <h1 className="text-center mb-10 font-bold text-xl">🔍 Comece a sua busca agora mesmo</h1>

        <CityAutocomplete />
      </div>

      <div className="mt-10">
        <header>
          <h1 className="font-bold text-center text-xl">🏢 Confira os imóveis mais recentes</h1>
        </header>

        <section className="flex justify-center items-center">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 p-8 overflow-x-auto">
            {imoveis.length <= 0 && <p>Não há imóveis recentes cadastrados.</p>}
            {
              imoveis.map((imovel) => {
                return (
                  <li className="list-none" key={imovel.id}>
                    <ImmovelCard
                      onClick={() => navigate(`/imoveis/${imovel.id}`)}
                      isLoading={isLoadingImagens}
                      src={urlByImovelId[imovel.id]}
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
        </section>


        <section className="pb-10">
          <div>
            <h1 className="text-xl font-bold text-center">Acompanhe os corretores com melhores avaliações</h1>

            <div className="md:flex gap-10 mt-10 justify-center p-4 md:p-0">

              <div className="flex gap-4 items-center bg-gray-100 p-4 rounded shadow mb-4 md:mb-0">
                <div className="rounded-full w-[50px] h-[50px] overflow-hidden">
                  <img className="rounded-full" src="https://images.unsplash.com/photo-1637684666772-1f215bfd0f5d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVzaW5lc3MlMjBtYW58ZW58MHx8MHx8fDA%3D" alt="avatar" />
                </div>
                <div>
                  <h1>Nome do Corretor</h1>
                  <small>+55 31 999999999</small>
                </div>
              </div>

              <div className="flex gap-4 items-center bg-gray-100 p-4 rounded shadow mb-4 md:mb-0">
                <div className="rounded-full w-[50px] h-[50px] overflow-hidden">
                  <img className="rounded-full" src="https://images.unsplash.com/photo-1637684666772-1f215bfd0f5d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVzaW5lc3MlMjBtYW58ZW58MHx8MHx8fDA%3D" alt="avatar" />
                </div>
                <div>
                  <h1>Nome do Corretor</h1>
                  <small>+55 31 999999999</small>
                </div>
              </div>

              <div className="flex gap-4 items-center bg-gray-100 p-4 rounded shadow mb-4 md:mb-0">
                <div className="rounded-full w-[50px] h-[50px] overflow-hidden">
                  <img className="rounded-full" src="https://images.unsplash.com/photo-1637684666772-1f215bfd0f5d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVzaW5lc3MlMjBtYW58ZW58MHx8MHx8fDA%3D" alt="avatar" />
                </div>
                <div>
                  <h1>Nome do Corretor</h1>
                  <small>+55 31 999999999</small>
                </div>
              </div>
            </div>
          </div>
        </section>


      </div>
    </div>
  )
}

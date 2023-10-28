import { useParams } from "react-router-dom";
import { Finalidade } from "../../../app/enums/Finalidade";
import { useImoveisByUserId } from "../../../app/hooks/useImoveisByUserId";
import { useUser } from "../../../app/hooks/useUser";
import avatar from '../../../assets/avatar.svg'
import { Button } from "../../components/Button";
import { ImmovelCard } from "../../components/ImovelCard";
import { PageLoader } from "../../components/PageLoader";
import { localStorageKeys } from "../../../app/config/localStorageKeys";

export function PerfilPage() {
  const { data, isFetching: isFetchingUser } = useUser();
  const { imoveis, isFetching: isFetchingImoveis } = useImoveisByUserId();

  const { userId: paramsId } = useParams();
  const storagedId = localStorage.getItem(localStorageKeys.USER_ID);
  const isUserProfile = paramsId === storagedId

  if (isFetchingImoveis && isFetchingUser) {
    return <PageLoader isLoading={isFetchingImoveis && isFetchingUser} />
  }

  return (
    <>
      <header className="flex justify-center items-center">
        <div className="text-center">
          <div className="w-32 h-32 rounded-full overflow-hidden container mx-auto mb-4">
            <img className="w-full h-full object-cover" alt="Avatar" src={avatar} />
          </div>

          <div>
            <h1 className="text-xl font-bold">{data?.nome}</h1>
            <small>{data?.email}</small>
          </div>
        </div>
      </header>

      <div className="flex justify-center items-center mt-10 p-4 md:p-0 ">
        <div>
          <div className="flex align-middle justify-between mb-10">
            <div>

              <small className="text-gray-500">Imóveis de {data?.nome}</small>
            </div>

            {isUserProfile && (
              <Button className="bg-transparent text-green-800 outline hover:bg-green-500 hover:text-white transition-all">
                🏢 Novo imovel
              </Button>
            )}

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {imoveis.length <= 0 && (
              <p className="container mx-auto">{data?.nome} não possui imóveis cadastrados.</p>
            )}

            {imoveis.map((imovel) => {
              return (
                <li className="list-none" key={imovel.id}>
                  <ImmovelCard
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
            })}
          </div>
        </div>
      </div>

    </>
  )
}

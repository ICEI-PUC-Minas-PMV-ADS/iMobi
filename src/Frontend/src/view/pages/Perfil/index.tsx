import { Link, useParams } from "react-router-dom";
import { useImoveisByUserParams } from "../../../app/hooks/useImoveisByUserParams";
import { useUserByParams } from "../../../app/hooks/useUserByParams";
import avatar from '../../../assets/avatar.svg'
import { Button } from "../../components/Button";
import { ImmovelCard } from "../../components/ImovelCard";
import { PageLoader } from "../../components/PageLoader";
import { localStorageKeys } from "../../../app/config/localStorageKeys";
import { useImagemByImovelId } from "../../../app/hooks/useImagemByImovelId";

export function PerfilPage() {
  const { data, isFetching: isFetchingUser } = useUserByParams();
  const { imoveis, isFetching: isFetchingImoveis } = useImoveisByUserParams();
  const { url, isLoadingImagens } = useImagemByImovelId();

  const { userId: paramsId } = useParams();
  const storagedId = localStorage.getItem(localStorageKeys.USER_ID);

  const isUserProfile = paramsId === storagedId;

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
          <div className="flex align-middle justify-between mb-10 p-8 lg:p-0">
            <div>

              <small className="text-gray-500">Imóveis de {data?.nome}</small>
            </div>

            {isUserProfile && (
              <div className="flex justify-between w-[300px]">
                <Link to="/imovel/cadastro">
                  <Button className="bg-transparent text-green-800 outline hover:bg-green-500 hover:text-white transition-all">
                    🏢 Novo imóvel
                  </Button>
                </Link>

                <Link to="/galeria">
                  <Button className="bg-transparent text-purple-800 outline hover:bg-purple-500 hover:text-white transition-all">
                    📷 Galeria
                  </Button>
                </Link>
              </div>
            )}

          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 p-8 md:p-0">
            {imoveis.length <= 0 && (
              <p className="container mx-auto">{data?.nome} não possui imóveis cadastrados.</p>
            )}

            {imoveis.map((imovel, index) => {
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
            }).reverse()}
          </div>
        </div>
      </div>

    </>
  )
}

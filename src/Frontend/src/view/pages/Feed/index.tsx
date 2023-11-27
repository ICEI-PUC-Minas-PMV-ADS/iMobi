import { useParams } from "react-router-dom";
import { Imovel } from "../../../app/entities/Imovel";
import { useImagemByImovelId } from "../../../app/hooks/useImagemByImovelId";
import { useImoveisByCidade } from "../../../app/hooks/useImoveisByCidade";
import { Button } from "../../components/Button";

import { useNavigate } from "react-router-dom";


export function FeedPage() {
  const cidade: string | undefined = useParams().cidade ?? '';

  const { urlByImovelId, isLoadingImagens } = useImagemByImovelId();

  const { imoveis } = useImoveisByCidade(cidade)

  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center container mx-auto ">
      <div className="w-[800px]" >
        <h1 className="mb-10 text-center text-2xl font-bold">Os melhores imóveis em {cidade}</h1>

        {imoveis.map((imovel: Imovel) => {
          return (
            <div key={imovel.id} onClick={() => navigate(`/imoveis/${imovel.id}`)} className="cursor-pointer hover:opacity-80 transition-all ease-in p-4 md:p-0">
              <div className="shadow md:w-[800px] mx-w-sm mb-8 md:flex md:h-[266px] md:rounded rounded-b-lg">
                <div className="overflow-hidden md:w-1/2 relative">
                  {isLoadingImagens ? (
                    <div className="animate-pulse bg-gray-300 h-full rounded-t-lg md:rounded-l-lg"></div>
                  ) : (
                    <img className=" w-full rounded-t-lg md:rounded-l-lg" src={urlByImovelId[imovel.id]} alt="Imagem do imóvel" />
                  )}
                </div>

                <div className="p-8 md:w-1/2 grid grid-rows-4">
                  <div className="mb-4 md:mb-0 items-center">
                    <h1 className="font-bold text-xl">{imovel.endereco.bairro}, {cidade}</h1>
                    <p className="text-sm text-gray-600">{imovel.detalhes}</p>
                  </div>

                  <div className="flex justify-between mb-4 md:mb-0 items-center">
                    <h2 className="font-bold">R${imovel.valorAluguel},00</h2>
                    <p>{imovel.finalidade}</p>
                  </div>

                  <div className="flex justify-between font-bold mb-4 md:mb-0 items-center">
                    <p className="text-xs">{imovel.areaTotal}m2</p>
                    <p className="text-xs">{imovel.quartos} quartos</p>
                    <p className="text-xs">{imovel.suites} suítes</p>
                  </div>

                  <Button className="bg-green-500 hover:bg-transparent hover:text-green-500 hover:outline transition-all ease-in">Falar com corretor</Button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

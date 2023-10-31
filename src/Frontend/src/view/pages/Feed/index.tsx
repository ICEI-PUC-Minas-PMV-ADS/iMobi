import { useParams } from "react-router-dom";
import { Imovel } from "../../../app/entities/Imovel";
import { ImmovelCard } from '../../components/ImovelCard';
import { useImagemByImovelId } from "../../../app/hooks/useImagemByImovelId";
import { PageLoader } from "../../components/PageLoader";
import { useImoveisByCidade } from "../../../app/hooks/useImoveisByCidade";

export function FeedPage() {
  const cidade: string | undefined = useParams().cidade ?? '';
  const { urlByImovelId, isFetching, isLoadingImagens } = useImagemByImovelId();
  const { imoveis } = useImoveisByCidade(cidade)


  if (isFetching) {
    return <PageLoader isLoading={isFetching} />
  }
  return (
    <div className="flex justify-center items-center">
      <div >
        <h1 className="mb-10 text-center text-2xl font-bold">Os melhores imóveis em {cidade}</h1>

        {imoveis.map((imovel: Imovel, index: number) => {
          return (
            <ImmovelCard
              areaTotal={imovel.areaTotal}
              bairro={imovel.endereco.bairro}
              cidade={imovel.endereco.cidade}
              detalhes={imovel.detalhes}
              finalidade={imovel.finalidade}
              quartos={imovel.quartos}
              suites={imovel.suites}
              valorAluguel={imovel.valorAluguel}
              key={imovel.id}
              src={urlByImovelId[imovel.id]}
              isLoading={isLoadingImagens}
            />
          )
        })}
      </div>

    </div>
  )
}

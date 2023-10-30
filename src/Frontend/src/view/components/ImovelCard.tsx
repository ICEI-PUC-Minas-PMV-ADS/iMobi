import { Finalidade } from "../../app/enums/Finalidade";

interface ImovelProps {
  finalidade: Finalidade;
  areaTotal: number;
  quartos: number;
  suites: number;
  detalhes: string;
  valorAluguel: number;
  bairro: string;
  cidade: string;
  src: string;
  isLoading?: boolean; // Nova prop para indicar se a imagem está carregando
}

export function ImmovelCard({ areaTotal, detalhes, finalidade, quartos, suites, valorAluguel, bairro, cidade, src, isLoading }: ImovelProps) {

  return (
    <div className="shadow rounded max-w-sm mb-8">
      <div className="overflow-hidden h-[300px] relative">
        {isLoading ? (
          <div className="animate-pulse bg-gray-300 w-[400px] h-full "></div>
        ) : (
          <img className="w-full rounded-t-lg" src={src} alt="Imagem do imóvel" />
        )}
      </div>

      <div className="p-4">
        <div className="mb-4">
          <h1 className="font-bold">{bairro}, {cidade}</h1>
          <span className="text-xs">{detalhes}</span>
        </div>

        <div className="flex justify-between mb-4">
          <h2 className="font-bold">R${valorAluguel},00</h2>
          <p>{finalidade}</p>
        </div>

        <div className="flex justify-between font-bold mb-4">
          <p className="text-xs">{areaTotal}m2</p>
          <p className="text-xs">{quartos} quartos</p>
          <p className="text-xs">{suites} suítes</p>
        </div>
      </div>
    </div>
  )
}

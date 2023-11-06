import { Finalidade } from "../../app/enums/Finalidade";
import area from '../../assets/areaTotal.svg'
import quarto from '../../assets/quarto.svg'
import banheiro from '../../assets/banheiro.svg'

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
  isLoading?: boolean;
  onClick?: () => void; // Nova prop para indicar se a imagem está carregando
}

export function ImmovelCard({ areaTotal, detalhes, finalidade, quartos, suites, valorAluguel, bairro, cidade, src, isLoading, onClick }: ImovelProps) {

  return (
    <div onClick={onClick} className="shadow rounded max-w-sm mb-8 cursor-pointer hover:opacity-80 transition-all ease-in">
      <div className="overflow-hidden md:h-[256px] relative">
        {isLoading ? (
          <div className="animate-pulse bg-gray-300 w-[384px] h-full rounded-t-lg"></div>
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

        <div className="grid grid-cols-3 gap-10 font-bold mb-4">
          <div className="flex gap-2 w-full">
            <img src={area} />
            <p className="text-xs">{areaTotal} m²</p>
          </div>

          <div className="flex gap-2 w-full">
            <img src={quarto} />
            <p className="text-xs">{quartos} quartos</p>
          </div>

          <div className="flex gap-2 w-full">
            <img src={banheiro} />
            <p className="text-xs">{suites} suítes</p>
          </div>
        </div>
      </div>
    </div>
  )
}

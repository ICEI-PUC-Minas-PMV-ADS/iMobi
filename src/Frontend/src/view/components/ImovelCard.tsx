import { Finalidade } from "../../app/enums/Finalidade"
import { useImagemByImovelId } from "../../app/hooks/useImagemByImovelId";

interface ImovelProps {
  finalidade: Finalidade,
  areaTotal: number,
  quartos: number,
  suites: number,
  detalhes: string,
  valorAluguel: number,
  bairro: string,
  cidade: string;
  src: string;
}

export function ImmovelCard({ areaTotal, detalhes, finalidade, quartos, suites, valorAluguel, bairro, cidade, src }: ImovelProps) {

  return (
    <div className="shadow rounded max-w-sm mb-8">
      <div className="overflow-hidden">
        <img className={src} />
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

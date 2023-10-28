import { Finalidade } from "../../app/enums/Finalidade"

interface ImovelProps {
  finalidade: Finalidade,
  areaTotal: number,
  quartos: number,
  suites: number,
  detalhes: string,
  valorAluguel: number,
  bairro: string,
  cidade: string;
}

export function ImmovelCard({ areaTotal, detalhes, finalidade, quartos, suites, valorAluguel, bairro, cidade }: ImovelProps) {
  return (
    <div className="shadow rounded max-w-sm mb-8">
      <div className="overflow-hidden">
        <img className="w-full rounded-t-lg" alt="Sala" src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1980&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
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

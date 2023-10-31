import { useLocation } from "react-router-dom";
import { Imovel } from "../../../app/entities/Imovel";

export function FeedPage() {
  const location = useLocation();
  const imoveis = location.state?.imoveis || [];

  return (
    <>
      <div>
        {imoveis.map((imovel: Imovel) => {
          return (
            <li key={imovel.id}>{imovel.detalhes}</li>
          )
        })}
      </div>
    </>
  )
}

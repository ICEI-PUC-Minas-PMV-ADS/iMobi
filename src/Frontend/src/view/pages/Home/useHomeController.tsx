import { useImagemByImovelId } from "../../../app/hooks/useImagemByImovelId";
import { useImoveis } from "../../../app/hooks/useImoveis";

export function useHomeController() {
  const { imoveis, isFetching } = useImoveis();

  const ids = imoveis.map((imovel) => {
    return imovel.id
  })

  console.log('Imoveis IDS: ', ids)
  return {
    imoveis,
    isFetching,

  }
}

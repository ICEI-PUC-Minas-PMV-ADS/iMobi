import { useImagemByImovelId } from "../../../app/hooks/useImagemByImovelId";
import { useImoveis } from "../../../app/hooks/useImoveis";

export function useHomeController() {
  const { imoveis, isFetching, } = useImoveis();
  const { urlByImovelId, isLoadingImagens } = useImagemByImovelId();

  return {
    imoveis,
    isFetching,
    urlByImovelId,
    isLoadingImagens
  }
}

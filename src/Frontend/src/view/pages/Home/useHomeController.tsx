import { useImagemByImovelId } from "../../../app/hooks/useImagemByImovelId";
import { useImoveis } from "../../../app/hooks/useImoveis";

export function useHomeController() {
  const { imoveis, isFetching } = useImoveis();
  const { url } = useImagemByImovelId();

  return {
    imoveis,
    isFetching,
    url,
  }
}

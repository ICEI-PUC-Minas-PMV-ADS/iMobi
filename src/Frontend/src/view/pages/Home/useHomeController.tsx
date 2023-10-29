import { useImoveis } from "../../../app/hooks/useImoveis";

export function useHomeController() {
  const { imoveis, isFetching } = useImoveis();

  return {
    imoveis,
    isFetching
  }
}

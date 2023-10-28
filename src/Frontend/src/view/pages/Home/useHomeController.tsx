import { useImoveis } from "../../../app/hooks/useImoveis";

export function useHomeController() {
  const { imoveis, isFetching } = useImoveis();

  console.log(imoveis);

  return {
    imoveis,
    isFetching
  }
}

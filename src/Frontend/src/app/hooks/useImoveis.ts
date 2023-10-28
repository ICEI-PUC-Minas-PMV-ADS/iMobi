import { useQuery } from "@tanstack/react-query";
import { imovelService } from "../services/imovelService";

export function useImoveis() {
  const { data, isFetching } = useQuery({
    queryKey: ['imoveis'],
    queryFn: () => imovelService.getAll(),
  });

  return {
    imoveis: data ?? [],
    isFetching
  }
}

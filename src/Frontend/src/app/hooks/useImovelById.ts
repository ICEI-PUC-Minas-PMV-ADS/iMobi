import { useQuery } from "@tanstack/react-query";
import { imovelService } from "../services/imovelService";

export function useImovelById(id: string) {
  const { data, isFetching } = useQuery({
    queryKey: ['imovelById'],
    queryFn: () => imovelService.getById(id),
  });

  return {
    imovel: data ?? null,
    isFetching,
  }
}

import { useQuery } from "@tanstack/react-query";
import { ibgeService } from "../services/ibgeService";

export function useIBGE(estado: string) {
  const { data: cidades, isFetching } = useQuery({
    queryKey: ['IBGE'],
    queryFn: () => ibgeService.getCidades(estado),
  });

  return {
    cidades,
    isFetching
  }
}

import { useQuery } from "@tanstack/react-query";
import { imovelService } from "../services/imovelService";

export function useImoveisByCidade(cidade: string) {
  const { data, isFetching } = useQuery({
    queryKey: ['imoveisByCidades'],
    queryFn: () => imovelService.getByCidade(cidade),
  });

  return {
    imoveis: data ?? [],
    isFetching,
  }
}

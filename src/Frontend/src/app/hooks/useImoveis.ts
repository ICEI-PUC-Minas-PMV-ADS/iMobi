import { useMutation, useQuery } from "@tanstack/react-query";
import { imovelService } from "../services/imovelService";
import { ImovelParams } from "../services/imovelService/create";

export function useImoveis() {
  const { data, isFetching } = useQuery({
    queryKey: ['imoveis'],
    queryFn: () => imovelService.getAll(),
  });

  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (data: ImovelParams) => {
      return imovelService.create(data);
    },
  });

  return {
    imoveis: data ?? [],
    isFetching,
    isPending,
    mutateAsync
  }
}

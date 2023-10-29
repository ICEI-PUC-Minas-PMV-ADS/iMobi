import { useQuery } from "@tanstack/react-query";
import { imagemService } from "../services/imagemService";

export function useImagemByImovelId(imovelId: string) {

  const { data, isFetching } = useQuery({
    queryKey: ['imagemByImovelId'],
    queryFn: () => {
      if (imovelId) {
        return imagemService.getByImovelId(imovelId)
      }

      else return null
    },
  });

  return {
    imagens: data ?? [],
    isFetching
  }
}

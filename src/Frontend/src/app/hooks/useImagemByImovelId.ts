import { useQuery } from "@tanstack/react-query";
import { imagemService } from "../services/imagemService";
import { useImoveis } from "./useImoveis";

export function useImagemByImovelId() {
  const { imoveis, isFetching } = useImoveis();

  const imovelIds = imoveis.map((imovel) => imovel.id);

  const { data: imagens, isFetching: isLoadingImagens } = useQuery({
    queryKey: imovelIds.map((id) => ['imagemByImovelId', id]),
    queryFn: async () => {
      const imageRequests = imovelIds.map((id) => {
        return imagemService.getByImovelId(id);
      });

      const imageData = await Promise.all(imageRequests);

      return imageData;
    },
  });

  const urlByImovelId: { [key: string]: string } = {};

  if (imagens) {
    imagens.forEach((imovelImagens, index) => {
      if (imovelImagens.length > 0) {
        urlByImovelId[imovelIds[index]] = imovelImagens[0].propriedadeImagem;
      } else {
        urlByImovelId[imovelIds[index]] = '';
      }
    });
  }

  return {
    imagens,
    urlByImovelId,
    isFetching,
    isLoadingImagens,
  };
}

import { useQuery } from "@tanstack/react-query";
import { imagemService } from "../services/imagemService";
import { useImoveis } from "./useImoveis";

export function useImagemByImovelId() {
  const { imoveis } = useImoveis();

  const imovelIds = imoveis.map((imovel) => imovel.id);

  const { data: imagens, isFetching } = useQuery({
    queryKey: imovelIds.map((id) => ['imagemByImovelId', id]),
    queryFn: async () => {
      const imageRequests = imovelIds.map((id) => {
        return imagemService.getByImovelId(id);
      });

      const imageData = await Promise.all(imageRequests);

      return imageData;
    },
  });

  const url: string[] = [];

  if (imagens) {
    imagens.forEach((imovelImagens) => {
      if (imovelImagens.length > 0) {
        url.push(imovelImagens[0].propriedadeImagem);
      } else {
        url.push('');
      }
    });
  }

  return {
    imagens,
    url,
    isFetching,
  };
}

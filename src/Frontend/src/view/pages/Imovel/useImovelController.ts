import { useParams } from "react-router-dom";
import { useImovelById } from "../../../app/hooks/useImovelById";
import { useImagemByImovelId } from "../../../app/hooks/useImagemByImovelId";
import { Imagem } from '../../../app/services/imagemService/getByImovelId';

export function useImovelController() {
  const { imovelId } = useParams();

  const { imovel } = useImovelById(imovelId ?? "");

  const { imagens, isLoadingImagens } = useImagemByImovelId();

  function getImagesForSelectedProperty(imovelId: string) {
    if (imagens) {
      const filteredImages: Imagem[] = [];

      imagens.forEach((innerArray) => {
        const matchingImages = innerArray.filter((imagem) => imagem.propriedadeId === imovelId);

        if (matchingImages.length > 0) {
          filteredImages.push(...matchingImages);
        }
      });

      return filteredImages;
    }

  };

  const filteredImages = getImagesForSelectedProperty(imovelId ?? "")

  return {
    filteredImages,
    isLoadingImagens,
    imovel,
  }
}

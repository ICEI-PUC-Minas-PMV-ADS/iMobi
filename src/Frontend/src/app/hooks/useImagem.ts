import { useMutation } from "@tanstack/react-query";
import { ImagemParams } from "../services/imagemService/add";
import { imagemService } from "../services/imagemService";

export function useImagem() {

  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (data: ImagemParams) => {
      return imagemService.add(data);
    },
  });

  return {
    isPending,
    mutateAsync
  }
}

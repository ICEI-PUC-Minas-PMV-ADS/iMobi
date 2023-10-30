import { useForm } from 'react-hook-form';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { useImagem } from '../../../app/hooks/useImagem';
import useImagePreview from '../../../app/hooks/useImagePreview';
import { useImoveisByStoredUser } from '../../../app/hooks/useImoveisByStoredUser';
import { useImagemByImovelId } from '../../../app/hooks/useImagemByImovelId';
import { ImagemResponse } from '../../../app/services/imagemService/getByImovelId';
import { useState } from 'react';

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const schema = z.object({
  propriedadeId: z.string().min(1, 'Selecione um imóvel'),
  ordem: z.string().refine((val) => {
    const num = parseInt(val, 10);
    return !Number.isNaN(num) && num >= 0;
  }, { message: 'Informe um número maior que 0' }),
  arquivoImagem: z
    .any()
    .refine((files) => files?.length == 1, "Image is required.")
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),
})

type FormData = z.infer<typeof schema>;

export function useGaleriaController() {
  const [selectedPropertyImages, setSelectedPropertyImages] = useState<ImagemResponse>([]);
  const { imoveis, isFetching } = useImoveisByStoredUser();
  const { imagens } = useImagemByImovelId();
  const { isPending, mutateAsync } = useImagem();

  const handlePropertySelection = (propertyId: string) => {
    const imagesForProperty = getImagesForSelectedProperty(propertyId);
    setSelectedPropertyImages(imagesForProperty);
  };

  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
    watch
  } = useForm<FormData>();

  const arquivoImagem = watch('arquivoImagem');

  const [filePreview] = useImagePreview(arquivoImagem);

  const imoveisOptions = [
    { value: '', label: 'Selecione um imóvel' },
    ...imoveis.map((imovel) => ({
      value: imovel.id,
      label: imovel.detalhes,
    })),
  ];

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const propriedadeId = data.propriedadeId;
      const selectedFile = arquivoImagem[0];

      if (!propriedadeId) return

      const formData = {
        propriedadeId: propriedadeId,
        ordem: data.ordem,
        arquivoImagem: selectedFile,
      };

      await mutateAsync(formData);
      toast.success("Imagem adicionada com sucesso!");
    } catch (err) {
      toast.error(`Erro ao adicionar imagem`);
    }
  })

  const getImagesForSelectedProperty = (selectedPropertyId: string) => {
    if (imagens) {
      const filteredImages: any = [];

      imagens.forEach((innerArray) => {
        const matchingImages = innerArray.filter((imagem) => imagem.propriedadeId === selectedPropertyId);

        if (matchingImages.length > 0) {
          filteredImages.push(...matchingImages);
        }
      });

      return filteredImages;
    }
  };

  return {
    register,
    handleSubmit,
    getImagesForSelectedProperty,
    handlePropertySelection,
    selectedPropertyImages,
    isPending,
    isFetching,
    imoveis,
    errors,
    imoveisOptions,
    filePreview,
  };
}

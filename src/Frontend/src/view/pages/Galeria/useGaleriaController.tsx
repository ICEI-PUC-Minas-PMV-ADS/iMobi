import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useImoveisByUserId } from '../../../app/hooks/useImoveisByUserId';
import toast from 'react-hot-toast';
import { useImagem } from '../../../app/hooks/useImagem';
import { useState } from 'react';
import useImagePreview from '../../../app/hooks/useImagePreview';

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
  const { imoveis, isFetching } = useImoveisByUserId();
  const { isPending, mutateAsync } = useImagem();

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

  return {
    register,
    handleSubmit,
    isPending,
    isFetching,
    imoveis,
    errors,
    imoveisOptions,
    filePreview
  };
}
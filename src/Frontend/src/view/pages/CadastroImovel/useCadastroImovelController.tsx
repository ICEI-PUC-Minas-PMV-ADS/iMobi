import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { toast } from "react-hot-toast";
import { useImoveis } from "../../../app/hooks/useImoveis";
import { Finalidade } from "../../../app/enums/Finalidade";
import { Status } from "../../../app/enums/Status";
import { localStorageKeys } from "../../../app/config/localStorageKeys";

const enderecoSchema = z.object({
  cidade: z.string().min(1, "Informe a cidade"),
  bairro: z.string().min(1, "Informe o bairro"),
  rua: z.string().min(1, "Informe a rua"),
  cep: z.string().min(1, "Informe o CEP"),
  estado: z.string().min(1, "Informe o estado"),
  numero: z.string().refine((val) => {
    const num = parseInt(val, 10);
    return !Number.isNaN(num) && num >= 0;
  }, { message: 'Informe um número maior que 0' })
});

const schema = z.object({
  finalidade: z.nativeEnum(Finalidade, {
    errorMap: () => {
      return { message: 'Selecione uma finalidade' }
    }
  }),
  status: z.nativeEnum(Status, {
    errorMap: () => {
      return { message: 'Selecione um status' }
    }
  }),
  areaPrivativa: z.string().refine((val) => {
    const num = parseInt(val, 10);
    return !Number.isNaN(num) && num >= 0;
  }, { message: 'Informe um número maior que 0' }),
  areaTotal: z.string().refine((val) => {
    const num = parseInt(val, 10);
    return !Number.isNaN(num) && num >= 0;
  }, { message: 'Informe um número maior que 0' }),
  quartos: z.string().refine((val) => {
    const num = parseInt(val, 10);
    return !Number.isNaN(num) && num >= 0;
  }, { message: 'Informe um número maior que 0' }),
  suites: z.string().refine((val) => {
    const num = parseInt(val, 10);
    return !Number.isNaN(num) && num >= 0;
  }, { message: 'Informe um número maior que 0' }),
  preco: z.string().refine((val) => {
    const num = parseInt(val, 10);
    return !Number.isNaN(num) && num >= 0;
  }, { message: 'Informe um número maior que 0' }),
  valorCondominio: z.string().refine((val) => {
    const num = parseInt(val, 10);
    return !Number.isNaN(num) && num >= 0;
  }, { message: 'Informe um número maior que 0' }),
  valorAluguel: z.string().refine((val) => {
    const num = parseInt(val, 10);
    return !Number.isNaN(num) && num >= 0;
  }, { message: 'Informe um número maior que 0' }),
  garagem: z.string().min(1, "Informe se possui garagem"),
  detalhes: z.string().min(1, "Informe os detalhes"),
  endereco: enderecoSchema,
});

type FormData = z.infer<typeof schema>;

export function useCadastroImovelController() {

  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { isPending, mutateAsync } = useImoveis();

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const userId = localStorage.getItem(localStorageKeys.USER_ID);

      if (!userId) return

      const formData = {
        ...data,
        userId: userId,
      };

      await mutateAsync(formData);

      toast.success("Imóvel cadastrado com sucesso!");
    } catch (err: any) {
      toast.error(`${err?.response.data}`);
    }
  });

  return { handleSubmit, register, errors, isPending };
}

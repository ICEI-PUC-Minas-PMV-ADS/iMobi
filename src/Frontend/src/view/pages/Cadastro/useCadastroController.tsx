import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';

const schema = z.object({
  nome: z.string().min(3, "Nome é obrigatório"),
  email: z.string().email('Informe um e-mail válido'),
  password: z.string().min(8, "A senha deve conter pelo menos 8 dígitos."),
  cpfcnpj: z.string().min(11, "Insira um CPF/CNPJ válido"),
  creci: z.string().min(4, "Insira um CRECI válido"),
})

type FormData = z.infer<typeof schema>;

export function useCadastroController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = hookFormHandleSubmit((data) => {
    //chamar a api
    console.log("Chamar a api com: ", data);
  });


  return { handleSubmit, register, errors };
}

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';

const schema = z.object({
  email: z.string().email('Informe um e-mail válido'),
})

type FormData = z.infer<typeof schema>;

export function useEsqSenhaController() {
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

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { toast } from "react-hot-toast";

import { useAuth } from "../../../app/hooks/useAuth";
import { useUser } from "../../../app/hooks/useUser";
import { localStorageKeys } from "../../../app/config/localStorageKeys";

const schema = z.object({
  email: z.string().email('Informe um e-mail válido'),
  password: z.string().min(8, "A senha deve conter pelo menos 8 dígitos."),
})

type FormData = z.infer<typeof schema>;

export function useLoginController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { isPending, mutateAsync } = useUser();
  const { login } = useAuth();

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const { token, id, nome, email } = await mutateAsync(data);

      localStorage.setItem(localStorageKeys.USER_ID, id);
      localStorage.setItem(localStorageKeys.EMAIL, email);
      localStorage.setItem(localStorageKeys.NAME, nome);

      login(token);
    } catch (err: any) {
      toast.error(`${err?.response.data}`);
    }
  });


  return { handleSubmit, register, errors, isPending };
}

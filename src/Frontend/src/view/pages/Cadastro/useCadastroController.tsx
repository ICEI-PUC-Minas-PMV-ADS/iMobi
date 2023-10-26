import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { authService } from "../../../app/services/authService";
import { CadastroParams } from "../../../app/services/authService/cadastro";
import toast from "react-hot-toast";

const schema = z.object({
  nome: z.string().min(3, "Nome é obrigatório"),
  email: z.string().email('Informe um e-mail válido'),
  password: z.string().min(8, "A senha deve conter pelo menos 8 dígitos."),
  cpfcnpj: z.string().min(11, "Insira um CPF/CNPJ válido"),
  creci: z.string().min(4, "Insira um CRECI válido"),
});

type FormData = z.infer<typeof schema>;

export function useCadastroController() {
  const [isChecked, setIsChecked] = useState(false);

  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleSwitchChange = () => {
    setIsChecked(!isChecked);
  };

  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (data: CadastroParams) => {
      return authService.cadastro(data);
    },
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    const formData = {
      ...data,
      role: isChecked ? ['user', 'corretor'] : ['user']
    };

    try {
      await mutateAsync(formData);
      toast.success('Usuario criado com sucesso');
    } catch (err: any) {
      toast.error(`${err?.response.data}`);
    }
  });

  return { handleSubmit, register, errors, setIsChecked, isChecked, handleSwitchChange, isPending };
}

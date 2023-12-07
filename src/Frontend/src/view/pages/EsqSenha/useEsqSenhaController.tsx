import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z.string().email('Informe um e-mail válido'),
});

type FormData = z.infer<typeof schema>;

export function useEsqSenhaController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const encodedEmail = encodeURIComponent(data.email);

      const response = await fetch(`https://localhost:7016/api/usuario/findByEmail/${encodedEmail}`);
      const usuarioData = await response.json();

      // Imprimir os dados no console
      console.log("Dados do usuário:", usuarioData);

      // Armazenar o email no localStorage
      localStorage.setItem("email", data.email);

      // Navegar para a tela de redefinição de senha
      navigate("/novaSenha");
      
    } catch (error) {
      console.error("Erro ao chamar a API:", error);
      toast.error("Erro ao recuperar dados do usuário");
    }
  });

  return { handleSubmit, register, errors };
}

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const schema = z.object({
    email: z.string().email('Informe um e-mail válido'),
    password: z.string().min(8, "A senha deve conter pelo menos 8 dígitos."),
    confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
});

type FormData = z.infer<typeof schema>;

export function useRedefinirSenhaController() {
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
        // Obter o e-mail do formulário
        const email = data.email;

        // Verificar se o email é válido
        if (!email) {
          throw new Error('E-mail não fornecido.');
        }

        const encodedEmail = encodeURIComponent(data.email);

        const response = await fetch(`https://localhost:7016/api/usuario/updatePassword/${encodedEmail}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            newPassword: data.password, // Assume que o novo campo de senha é newPassword
          }),
        });
  
        if (response.ok) {
          toast.success("Senha redefinida com sucesso!");
          navigate('/login');
        } else {
          const errorData = await response.json();
          toast.error(`Erro ao redefinir a senha: ${errorData.message}`);
        }
  
      } catch (error) {
        console.error("Erro ao chamar a API:", error);
        toast.error("Erro ao redefinir a senha");
      }
    });
  
    return { handleSubmit, register, errors };
}

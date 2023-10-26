import { useAuth } from "../../../app/hooks/useAuth"
import { Button } from "../../components/Button";

export function PerfilPage() {
  const { logout } = useAuth();

  return (
    <>
      <h1>Perfil</h1>
      <Button onClick={logout}>Sair</Button>
    </>
  )
}

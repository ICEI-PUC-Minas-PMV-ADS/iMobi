import { httpClient } from "../httpClient";

interface IResponseData {
  nome: string;
  email: string;
  password: string;
  cpfcnpj: string;
  creci?: string;
  role: string[];
}

export async function findById(id: string) {
  const { data } = await httpClient.get<IResponseData>(`/usuario/findById/${id}`);

  return data;
}

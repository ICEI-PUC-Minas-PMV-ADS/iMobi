import { httpClient } from "../httpClient";

interface IResponseData {
  nome: string;
  email: string;
  password: string;
  cpfcnpj: string;
  creci?: string;
  role: string[];
}

export async function findByEmail(email: string) {
  const { data } = await httpClient.get<IResponseData>(`/usuario/findByEmail/${email}`);

  return data;
}

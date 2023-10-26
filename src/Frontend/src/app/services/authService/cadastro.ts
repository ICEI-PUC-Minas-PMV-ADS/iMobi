import { httpClient } from "../httpClient";

export interface CadastroParams {
  nome: string;
  email: string;
  password: string;
  cpfcnpj: string;
  creci?: string;
  role: string[];
}

interface IResponseData {
  nome: string;
  email: string;
  password: string;
  cpfcnpj: string;
  creci?: string;
  role: string[];
}

export async function cadastro(params: CadastroParams) {
  const { data } = await httpClient.post<IResponseData>('/usuario/create', params);

  return data;
}

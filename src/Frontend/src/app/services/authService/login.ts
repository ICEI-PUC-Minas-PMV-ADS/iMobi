import { httpClient } from "../httpClient";

export interface LoginParams {
  email: string;
  password: string;
}

interface IResponseData {
  token: string;
  id: string;
  nome: string;
  email: string;
  creci: string;
  role: string[];
}

export async function login(params: LoginParams) {
  const { data } = await httpClient.post<IResponseData>('/auth/login', params);

  return data;
}

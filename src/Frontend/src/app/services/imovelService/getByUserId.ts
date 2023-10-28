import { httpClient } from "../httpClient";
import { Imovel } from '../../entities/Imovel'

export async function getByUserId(userId: string) {
  const { data } = await httpClient.get<Imovel[]>(`/propriedade/getbyuserid/${userId}`);

  return data;
}

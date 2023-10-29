import { httpClient } from "../httpClient";

export async function getByImovelId(imovelId: string) {
  const { data } = await httpClient.get(`/image/getbypropriedadeid/${imovelId}`);

  return data;
}

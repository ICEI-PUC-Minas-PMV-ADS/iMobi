import { httpClient } from "../httpClient";

export interface Imagem {
  id: string;
  propriedadeId: string;
  propriedadeImagem: string;
  ordem: number;
}

export type ImagemResponse = Imagem[];

export async function getByImovelId(imovelId: string): Promise<ImagemResponse> {
  const { data } = await httpClient.get<ImagemResponse>(`/image/getbypropriedadeid/${imovelId}`);
  return data;
}

import { httpClient } from "../httpClient";

export interface ImagemParams {
  propriedadeId: string,
  arquivoImagem?: any,
  ordem: string,
}

export async function add(params: ImagemParams) {
  const { data } = await httpClient.post('/image/add', params, {
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  });

  return data;
}

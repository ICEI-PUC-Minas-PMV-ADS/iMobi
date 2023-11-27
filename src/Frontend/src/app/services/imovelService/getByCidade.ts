import { httpClient } from "../httpClient";

enum Finalidade {
  Nd, Venda, Aluguel
}

enum Status {
  Lancamento, Pronto, EmConstrucao
}

interface Endereco {
  estado: string;
  cidade: string;
  bairro: string;
  rua: string;
  cep: string
}

export interface ImovelResponse {
  id: string
  userId: string,
  finalidade: Finalidade,
  status: Status,
  areaPrivativa: number,
  areaTotal: number,
  quartos: number,
  suites: number,
  garagem: string,
  detalhes: string,
  preco: number,
  valorCondominio: number,
  valorAluguel: number,
  endereco: Endereco
}

export async function getByCidade(cidade: string) {
  const { data } = await httpClient.get<ImovelResponse[]>(`/propriedade/getbycidade/${cidade}`);

  return data;
}

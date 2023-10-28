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

export interface ImovelParams {
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

export async function create(params: ImovelParams) {
  const { data } = await httpClient.post('/propriedade', params);

  return data;
}

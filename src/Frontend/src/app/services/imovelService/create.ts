import { Endereco } from "../../entities/Endereco";
import { Finalidade } from "../../enums/Finalidade";
import { Status } from "../../enums/Status";
import { httpClient } from "../httpClient";

export interface ImovelParams {
  finalidade: Finalidade,
  status: Status,
  areaPrivativa: string,
  areaTotal: string,
  quartos: string,
  suites: string,
  garagem: string,
  detalhes: string,
  preco: string,
  valorCondominio: string,
  valorAluguel: string,
  endereco: Endereco
}

export async function create(params: ImovelParams) {
  const { data } = await httpClient.post('/propriedade', params);

  return data;
}

import { Finalidade } from "../enums/Finalidade"
import { Status } from "../enums/Status"
import { Endereco } from "./Endereco"

export interface Imovel {
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

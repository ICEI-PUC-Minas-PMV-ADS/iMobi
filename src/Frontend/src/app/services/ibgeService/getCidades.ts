import axios from "axios";

export async function getCidades(estado: string) {
  const { data } = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`);

  return data;
}

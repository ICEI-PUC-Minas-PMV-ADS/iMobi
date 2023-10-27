import { httpClient } from "../httpClient";

export async function validate() {
  const { data } = await httpClient.get('/auth/validate');

  return data;
}

import { useQuery } from "@tanstack/react-query";
import { imovelService } from "../services/imovelService";
import { useParams } from "react-router-dom";
import { localStorageKeys } from "../config/localStorageKeys";

export function useImoveisByUserId() {
  const { userId } = useParams();
  const storedId = localStorage.getItem(localStorageKeys.USER_ID);

  const { data, isFetching } = useQuery({
    queryKey: ['imoveisByUserId'],
    queryFn: () => {
      if (storedId) {
        return imovelService.getByUserId(storedId)
      }

      if (userId) {
        return imovelService.getByUserId(userId)
      }
      else return null
    },
  });

  return {
    imoveis: data ?? [],
    isFetching
  }
}

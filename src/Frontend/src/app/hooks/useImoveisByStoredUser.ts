import { useQuery } from "@tanstack/react-query";
import { imovelService } from "../services/imovelService";
import { localStorageKeys } from "../config/localStorageKeys";

export function useImoveisByStoredUser() {
  const userId = localStorage.getItem(localStorageKeys.USER_ID);

  const { data, isFetching } = useQuery({
    queryKey: ['imoveisByStoredUser'],
    queryFn: () => {

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

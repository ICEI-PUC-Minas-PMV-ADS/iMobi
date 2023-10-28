import { useMutation, useQuery } from "@tanstack/react-query";
import { authService } from "../services/authService";
import { LoginParams } from "../services/authService/login";
import { userService } from "../services/userService";
import { localStorageKeys } from "../config/localStorageKeys";
import { useParams } from "react-router-dom";

export function useUser() {
  //  const userId = localStorage.getItem(localStorageKeys.USER_ID);
  const { userId } = useParams();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (data: LoginParams) => {
      return authService.login(data);
    },
  });

  const { data, isFetching } = useQuery({
    queryKey: ['user'],
    queryFn: () => {
      if (userId) return userService.findById(userId)
      else return null
    },
  });

  return {
    isPending,
    mutateAsync,
    data,
    isFetching
  }
}

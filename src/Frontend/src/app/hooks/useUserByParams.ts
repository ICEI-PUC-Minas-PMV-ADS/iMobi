import { useQuery } from "@tanstack/react-query";
import { userService } from "../services/userService";
import { useParams } from "react-router-dom";

export function useUserByParams() {
  const { userId } = useParams();

  const { data, isFetching } = useQuery({
    queryKey: ['user'],
    queryFn: () => {
      if (userId) return userService.findById(userId)
      else return null
    },
  });

  return {
    data,
    isFetching
  }
}

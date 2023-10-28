import { useQuery } from "@tanstack/react-query";
import { imovelService } from "../services/imovelService";
import { useParams } from "react-router-dom";

export function useImoveisByUserId() {
  const { userId } = useParams();

  const { data, isFetching } = useQuery({
    queryKey: ['imoveisByUserId'],
    queryFn: () => {
      if (userId) return imovelService.getByUserId(userId)
      else return null
    },
  });

  return {
    imoveis: data ?? [],
    isFetching
  }
}

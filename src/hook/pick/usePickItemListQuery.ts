import { useQuery } from "@tanstack/react-query";
import { http } from "../../apis/http";
import { PickItemList } from "../../types/map";

export const usePickItemListQuery = () => {
  return useQuery<PickItemList>({
    queryKey: ["pickItemList"],
    queryFn: async () => {
      const response = await http.get<PickItemList>(`/pick`);
      return response;
    },
  });
};

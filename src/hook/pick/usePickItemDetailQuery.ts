import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { http } from "../../apis/http";
import { PickItemDetail } from "../../types/map";

export const usePickItemDetailQuery = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const itemNumber = searchParams.get("detail");

  return useQuery<PickItemDetail>({
    queryKey: ["pickItem", itemNumber],
    queryFn: async () => {
      if (!itemNumber) {
        throw new Error("Invalid item number");
      }
      const response = await http.get<PickItemDetail>(`/pick/${itemNumber}`);
      return response; // Assuming response.data contains the desired data
    },
    enabled: !!itemNumber, // itemNumber가 유효한 경우에만 쿼리를 실행
  });
};

import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { MapItemList } from "../../types/map";
import { commonApis } from "../commonApi";

//지도 리스트 (/map)
const API_URL = "/map";

async function fetchMapItemList(category: string): Promise<MapItemList> {
  try {
    const res: AxiosResponse<MapItemList> = await commonApis.get(
      API_URL + `?category=${category}`,
      {
        headers: { accept: `*/*` },
      }
    );
    return res.data;
  } catch (error) {
    // Axios 에러를 확인하여 상세 정보를 로그에 출력
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        headers: error.response?.headers,
      });
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
}
export const useMapItemListQuery = (category: string) => {
  return useQuery<MapItemList>({
    queryKey: ["MapItemList"],
    queryFn: () => fetchMapItemList(category),
    // staleTime: 1000,
  });
};

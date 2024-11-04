import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { PickItemList } from "../../types/map";
import { commonApis } from "../commonApi";

// 울산 픽 리스트 (pick)
const API_URL = "/pick";

async function fetchPickItemList(): Promise<PickItemList> {
  try {
    const res: AxiosResponse<PickItemList> = await commonApis.get(API_URL, {
      headers: { accept: `*/*` },
    });
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
export const usePickItemListQuery = () => {
  return useQuery<PickItemList>({
    queryKey: ["pickItemList"],
    queryFn: fetchPickItemList,
    // staleTime: 1000,
  });
};

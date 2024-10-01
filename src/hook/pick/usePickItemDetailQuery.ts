import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { useLocation } from "react-router-dom";
import { PickItemDetail } from "../../types/map";
import { commonApis } from "../commonApi";

// 울산 픽 리스트 상세보기 (/pick/${id})
const API_URL = "/pick";
async function fetchPickItemDetail(itemId:string): Promise<PickItemDetail> {
  try {
    const res: AxiosResponse<PickItemDetail> = await commonApis.get(
      API_URL+`/${itemId}`,
      {
        headers: { accept: `*/*` },
      }
    );
    return res.data;
  } catch (error) {
    // Axios 에러를 확인하여 상세 정보를 로그에 출력
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        headers: error.response?.headers,
      });
    } else {
      console.error('Unexpected error:', error);
    }
    throw error; 
  }
}

export const usePickItemDetailQuery = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const itemNumber = searchParams.get("detail");

  if (!itemNumber) throw new Error("Invalid item number");

  return useQuery<PickItemDetail>({
    queryKey: ["pickItem", itemNumber],
    queryFn: () => fetchPickItemDetail(itemNumber),
    enabled: !!itemNumber, // itemNumber가 유효한 경우에만 쿼리를 실행
    // staleTime: 1000,
  });
};
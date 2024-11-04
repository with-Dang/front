import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { MemberInfoType } from "../../types/member";
import { commonApis } from "../commonApi";

// 마이페이지 (member/info)
const API_URL = "/member/info";

async function fetchMemberInfo(): Promise<MemberInfoType> {
  try {
    const res: AxiosResponse<MemberInfoType> = await commonApis.get(API_URL, {
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
export const useMemberQuery = () => {
  return useQuery<MemberInfoType>({
    queryKey: ["member"],
    queryFn: fetchMemberInfo,
    // staleTime: 1000,
  });
};

import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { commonApis } from "../commonApi";

// 이메일 중복 확인 API URL
const API_URL = "/member/check/email";

async function checkEmail(email: string): Promise<string> {
  try {
    const res: AxiosResponse<string> = await commonApis.get(
      `${API_URL}?email=${email}`,
      {
        headers: { accept: `*/*` },
      }
    );
    return res.data;
  } catch (error) {
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

// useCheckEmailQuery 커스텀 훅
export const useCheckEmailQuery = () => {
  const queryClient = useQueryClient();

  // query만 준비하고 초기에는 자동 실행되지 않도록 설정
  const { data, error, isLoading } = useQuery<string, Error>({
    queryKey: ["checkEmail"],
    queryFn: () => Promise.resolve(""), // 초기 실행 방지용으로 빈 함수
    enabled: false, // 자동으로 실행되지 않도록 설정
  });

  // 특정 시점에 checkEmail을 호출하는 함수
  const triggerCheckEmail = async (email: string) => {
    return queryClient.fetchQuery({
      queryKey: ["checkEmail", email],
      queryFn: () => checkEmail(email),
    });
  };

  return { data, error, isLoading, triggerCheckEmail };
};

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
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
    if (res.status === 200) {
      message.success("사용 가능한 이메일입니다.");
    }
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.status === 400) {
        message.error(
          "이미 사용 중인 이메일입니다. 다른 이메일을 사용해주세요."
        );
      }
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

export const useCheckEmailQuery = () => {
  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery<string, Error>({
    queryKey: ["checkEmail"],
    queryFn: () => Promise.resolve(""),
    enabled: false,
  });

  const triggerCheckEmail = async (email: string) => {
    return queryClient.fetchQuery({
      queryKey: ["checkEmail", email],
      queryFn: () => checkEmail(email),
    });
  };

  return { data, error, isLoading, triggerCheckEmail };
};

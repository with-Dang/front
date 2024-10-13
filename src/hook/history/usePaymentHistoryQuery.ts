import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { PaymentHistory } from "../../types/paymentHistory";
import { commonApis } from "../commonApi";

// 결제 영수증 여러 개(공구 진행 중) (/payment/history)
const API_URL = "/payment/history";

async function fetchPaymentHistory(): Promise<PaymentHistory> {
  try {
    const res: AxiosResponse<PaymentHistory> = await commonApis.get(API_URL, {
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
export const usePaymentHistoryQuery = () => {
  return useQuery<PaymentHistory>({
    queryKey: ["paymentHistory"],
    queryFn: fetchPaymentHistory,
    staleTime: 1000,
  });
};

import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { PaymentStatusType } from "../../types/payment/type";
import { commonApis } from "../commonApi";

// 결제 내역 상태 (payment/status)
const API_URL = "/payment/status";

async function fetchPaymentStatus(): Promise<PaymentStatusType> {
  try {
    const res: AxiosResponse<PaymentStatusType> = await commonApis.get(
      API_URL,
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
export const usePaymentStatusQuery = () => {
  return useQuery<PaymentStatusType>({
    queryKey: ["payment-status"],
    queryFn: fetchPaymentStatus,
    // staleTime: 1000,
  });
};

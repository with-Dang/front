import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import { commonApis } from "../commonApi";

const API_URL = `/payment/toss/success`;

const successPaymentApi = async (params: string) => {
  const response = await commonApis.get<AxiosResponse<string>>(
    API_URL + "?" + params
  );
  return response.data; // AxiosResponse의 data 필드만 반환
};

const useSuccessPayment = (params: string) => {
  const navigate = useNavigate();

  const query = useQuery<string, Error>({
    queryKey: ["successPayment", params],
    queryFn: () => successPaymentApi(params),
    staleTime: 1000,
  });

  if (query.isSuccess) {
    navigate("/payment-history");
  }

  return query;
};

export default useSuccessPayment;

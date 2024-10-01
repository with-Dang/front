import { useMutation } from "@tanstack/react-query";
import { TossPaymentsWidgets } from "@tosspayments/tosspayments-sdk";
import { AxiosResponse } from "axios";
import { PaymentRes } from "../../types/payment/type";
import { commonApis } from "../commonApi";

const apiUrl = `/payment/toss`;

type PaymentProps = {
  amount: number;
  paymentWidget: TossPaymentsWidgets | null;
};

const requestPaymentApi = async ({ amount, paymentWidget }: PaymentProps) => {
  const body = { amount };

  const response = await commonApis.post<AxiosResponse<PaymentRes>>(
    apiUrl,
    body
  );

  console.log("🚀 ~ requestPaymentApi ~ paymentWidget:", paymentWidget);
  return response;
};

const useRequestPayment = () => {
  return useMutation<AxiosResponse<PaymentRes>, Error, PaymentProps>({
    mutationFn: requestPaymentApi, // mutationFn
  });
};

export default useRequestPayment;

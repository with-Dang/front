// import { TossPaymentsWidgets } from "@tosspayments/tosspayments-sdk";
// import axios from "axios";
// import { commonApis } from "../commonApi";

// const commonAPI = "https://one.marinesnow34.com/api/v1";
// const apiUrl = `${commonAPI}/payment/toss`;

// type PaymentProps = {
//   amount: number;
//   paymentWidget: TossPaymentsWidgets | null;
//   // paymentMethodsWidget?: WidgetPaymentMethodWidget;
// };

// const useRequestPayment = () => {
//   const token = localStorage.getItem("accessToken");
//   const requestPayment = async ({
//     amount,
//     paymentWidget,
//   }: // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   // paymentMethodsWidget,
//   PaymentProps): Promise<void> => {
//     try {
//       const body = { amount };
//       console.log("body: ", body);
//       console.log("paymentWidget: ", paymentWidget?.requestPayment);
//       const response = await commonApis.post(apiUrl, body, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       // if (response.data.amount <= 0) {
//       //   window.location.href =
//       //     response.data.successUrl +
//       //     `?paymentType=NORMAL&orderId=${response.data.orderId}&paymentKey=membership&amount=${response.data.amount}`;
//       //   return;
//       // }
//       if (response.data.orderId) {
//         window.location.href =
//           response.data.successUrl +
//           `?paymentType=NORMAL&orderId=${response.data.orderId}&paymentKey=membership`;
//       }
//       // paymentMethodsWidget.updateAmount(Math.max(response.data.amount, 0));

//       paymentWidget
//         ?.requestPayment(response.data)
//         .then(function (data: unknown) {
//           console.log("🚀 ~ data:", data);
//           return;
//         })
//         .catch(function (error: { code: string }) {
//           console.log("🚀 ~ useRequestPayment ~ error:", error);
//           // if (error.code === "NOT_SELECTED_PAYMENT_METHOD") {
//           //   // 결제수단 미선택 오류
//           //   const method = paymentMethodsWidget.getSelectedPaymentMethod();
//           //   console.log("hook 내부 method: ", method);
//           //   console.log("requestPayment error: ", error);
//           //   alert("토스 페이먼츠 오류로 새로고침을 시도합니다");
//           //   // window.location.reload(true);
//           // }
//         });
//     } catch (error) {
//       console.error("Error during payment request:", error);
//     }
//   };

//   return requestPayment;
// };

// export default useRequestPayment;

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
  const token = localStorage.getItem("accessToken");
  const body = { amount };

  const response = await commonApis.post<AxiosResponse<PaymentRes>>(
    apiUrl,
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (response.data.orderId) {
    window.location.href =
      response.data.successUrl +
      `?paymentType=NORMAL&orderId=${response.data.orderId}&paymentKey=membership`;
  }

  await paymentWidget?.requestPayment(response.data);

  return response;
};

const useRequestPayment = () => {
  return useMutation<AxiosResponse<PaymentRes>, Error, PaymentProps>({
    mutationFn: requestPaymentApi, // mutationFn
    // {
    onSuccess: (data) => {
      console.log("Payment request successful:", data);
    },
    onError: (error) => {
      console.error("Error during payment request:", error);
      alert("결제 요청 중 오류가 발생했습니다. 다시 시도해 주세요.");
    },
  });
};

export default useRequestPayment;

import {
  loadTossPayments,
  TossPaymentsWidgets,
} from "@tosspayments/tosspayments-sdk";
import { useEffect, useState } from "react";
import useRequestPayment from "../../../hook/payment/useRequestPayment";
import { COLORS } from "../../../styles/Color";
import Button from "../../UI/atoms/button/Button";
import Text from "../../UI/atoms/text/Text";
import S from "./Payment.module.css";

const clientKey = "test_gck_mBZ1gQ4YVXW95donJ2BZ3l2KPoqN";
const customerKey = "NXZX6dPdrCGeg1zjKJuvJ";

type PaymentMethodProps = {
  price: number;
};

function PaymentMethod({ price = 50000 }: PaymentMethodProps) {
  console.log("🚀 ~ PaymentMethod ~ price:", price);
  const [amount] = useState({
    currency: "KRW",
    value: 50_000,
  });
  // const [ready, setReady] = useState(false);
  const [widgets, setWidgets] = useState<TossPaymentsWidgets | null>(null);

  const requestPayment = useRequestPayment();

  const paymentRequest = () => {
    // const paymentWidget = paymentWidgetRef.current;
    // const paymentMethodsWidget = paymentMethodsWidgetRef.current;
    requestPayment({ amount: amount.value, paymentWidget: widgets });
    console.log("paymentWidget: ", widgets);
  };

  // useEffect(() => {
  //   async function fetchPaymentWidgets() {
  //     if (widgets) return; // 이미 위젯이 있으면 다시 실행하지 않음

  //     // ------  결제위젯 초기화 ------
  //     const tossPayments = await loadTossPayments(clientKey);
  //     // 회원 결제
  //     const newWidgets = tossPayments.widgets({
  //       customerKey,
  //     });

  //     setWidgets(newWidgets);

  //     // await widgets.setAmount(amount);

  //     await Promise.all([
  //       newWidgets.setAmount(amount),
  //       // ------  결제 UI 렌더링 ------
  //       newWidgets.renderPaymentMethods({
  //         selector: "#payment-method",
  //         variantKey: "DEFAULT",
  //       }),
  //       // ------  이용약관 UI 렌더링 ------
  //       newWidgets.renderAgreement({
  //         selector: "#agreement",
  //         variantKey: "AGREEMENT",
  //       }),
  //     ]);
  //   }

  //   fetchPaymentWidgets();
  // }, [amount]);

  useEffect(() => {
    async function fetchPaymentWidgets() {
      // ------  결제위젯 초기화 ------
      const tossPayments = await loadTossPayments(clientKey);
      // 회원 결제
      const widgets = tossPayments.widgets({
        customerKey,
      });
      // 비회원 결제
      // const widgets = tossPayments.widgets({ customerKey: ANONYMOUS });

      setWidgets(widgets);
    }

    fetchPaymentWidgets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientKey, customerKey]);

  useEffect(() => {
    async function renderPaymentWidgets() {
      if (widgets == null) {
        return;
      }
      // ------ 주문의 결제 금액 설정 ------
      await widgets.setAmount(amount);

      await Promise.all([
        // ------  결제 UI 렌더링 ------
        widgets.renderPaymentMethods({
          selector: "#payment-method",
          variantKey: "DEFAULT",
        }),
        // ------  이용약관 UI 렌더링 ------
        widgets.renderAgreement({
          selector: "#agreement",
          variantKey: "AGREEMENT",
        }),
      ]);

      // setReady(true);
    }

    renderPaymentWidgets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [widgets]);

  useEffect(() => {
    if (widgets == null) {
      return;
    }

    widgets.setAmount(amount);
  }, [widgets, amount]);

  return (
    <div className={S.paymentMethod}>
      <Text fontSize="1rem">결제수단</Text>
      <div className="box_section">
        {/* 결제 UI */}
        <div id="payment-method" />
        {/* 이용약관 UI */}
        <div id="agreement" />

        {/* 결제하기 버튼 */}
        <Button
          color={COLORS.white}
          backgroundColor={COLORS.main}
          borderRadius="50px"
          fontSize="1.125rem"
          text="결제하기"
          onClick={paymentRequest}
        />
        {/* <button
            className="button"
            disabled={!ready}
            onClick={async () => {
              try {
                // ------ '결제하기' 버튼 누르면 결제창 띄우기 ------
                // 결제를 요청하기 전에 orderId, amount를 서버에 저장하세요.
                // 결제 과정에서 악의적으로 결제 금액이 바뀌는 것을 확인하는 용도입니다.
                await widgets.requestPayment({
                  orderId: "RkDpltwsH7u_5GDmYfppG",
                  orderName: "토스 티셔츠 외 2건",
                  successUrl: window.location.origin + "/success",
                  failUrl: window.location.origin + "/fail",
                  customerEmail: "customer123@gmail.com",
                  customerName: "김토스",
                  customerMobilePhone: "01012341234",
                });
              } catch (error) {
                // 에러 처리하기
                console.error(error);
              }
            }}
          >
            결제하기
          </button> */}
      </div>
    </div>
  );
}

export default PaymentMethod;

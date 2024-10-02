import { useSearchParams } from "react-router-dom";
import useSuccessPayment from "../../../hook/payment/useSuccessPayment";
import { COLORS } from "../../../styles/Color";
import Text from "../../UI/atoms/text/Text";

const PaymentLoading = () => {
  const [searchParams] = useSearchParams();
  console.log("🚀 ~ PaymentLoading ~ searchParams:", searchParams);
  useSuccessPayment(String(searchParams));

  return (
    <div
      style={{
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text fontSize="3rem">결제중...</Text>
      <Text fontSize="0.75rem" color={COLORS.lightGray}>
        진행사항은 [결제내역]에서 확인 가능해요!
      </Text>
    </div>
  );
};

export default PaymentLoading;

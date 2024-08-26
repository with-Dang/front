import Text from "../../atoms/text/Text";
import S from "./Payment.module.css";

function PaymentMethod() {
  return (
    <div className={S.paymentMethod}>
      <Text fontSize="1rem">결제수단</Text>
    </div>
  );
}

export default PaymentMethod;

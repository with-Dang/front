import { COLORS } from "../../../styles/Color";
import Text from "../../UI/atoms/text/Text";
import S from "./Payment.module.css";

function PaymentPrice() {
  return (
    <div className={S.paymentPrice}>
      <Text fontSize="1rem">결제금액</Text>
      <div className={S.paymentPrice__bottom}>
        <span className={S.paymentPrice__bottom__price}>
          <Text color={COLORS.gray} fontSize="0.625rem">
            총 상품 금액
          </Text>
          <Text color={COLORS.gray} fontSize="0.625rem">
            26,900원
          </Text>
        </span>
        <span className={S.paymentPrice__bottom__price}>
          <Text color={COLORS.gray} fontSize="0.625rem">
            상품 할인
          </Text>
          <Text color={COLORS.red} fontSize="0.625rem">
            -2,000원
          </Text>
        </span>
      </div>
      <div className={S.paymentPrice__bottom}>
        <span className={S.paymentPrice__bottom__price}>
          <Text color={COLORS.text} fontSize="0.875rem">
            총 결제 금액
          </Text>
          <Text color={COLORS.text} fontSize="0.875rem">
            24,900원
          </Text>
        </span>
      </div>
    </div>
  );
}

export default PaymentPrice;

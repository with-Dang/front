import { COLORS } from "../../../../styles/Color";
import { formatNumber } from "../../../../utils/formatNumber";
import Text from "../../../UI/atoms/text/Text";
import S from "./PaymentHistoryPriceBox.module.css";

type PriceBoxProps = {
  price: number;
  discountRate: number;
};
export const PaymentHistoryPriceBox = ({
  price,
  discountRate,
}: PriceBoxProps) => {
  const totalPrice = Math.round(price * (1 - 0.01 * discountRate));
  const discountedPrice = price - totalPrice;
  return (
    <div className={S.PaymentHistoryPriceBox}>
      <div>
        <Text color={COLORS.lightGray} fontSize="0.875rem" fontWeight="400">
          총 상품 금액
        </Text>
        <Text color={COLORS.lightGray} fontSize="0.875rem" fontWeight="400">
          {formatNumber(price)}원
        </Text>
      </div>

      <div>
        <Text color={COLORS.lightGray} fontSize="0.875rem" fontWeight="400">
          상품할인
        </Text>
        <Text color={COLORS.lightRed} fontSize="0.875rem" fontWeight="400">
          -{formatNumber(discountedPrice)} 원
        </Text>
      </div>

      <div>
        <Text color={COLORS.text} fontSize="1.125rem" fontWeight="700">
          총 결제 금액
        </Text>
        <Text color={COLORS.text} fontSize="1.125rem" fontWeight="700">
          {formatNumber(totalPrice)} 원
        </Text>
      </div>
    </div>
  );
};

import { COLORS } from "../../../styles/Color";
import { formatNumber } from "../../../utils/formatNumber";
import Text from "../../atoms/text/Text";
import S from "./PriveBox.module.css";
function PriceBox({
  discountRate,
  price,
}: {
  discountRate: number;
  price: number;
}) {
  const discountedPrice = Math.round(price * (1 - 0.01 * discountRate)); //소수점 반올림
  return (
    <div className={S.priceBoxWrapper}>
      <span className={S.priceBox}>
        <Text color={COLORS.lightGray} fontSize="0.875rem" fontWeight="400">
          {discountRate}%
        </Text>
        <Text color={COLORS.lightGray} fontSize="0.75rem" fontWeight="400">
          {formatNumber(price)}원
        </Text>
      </span>
      <Text color={COLORS.lightRed} fontSize="1rem" fontWeight="400">
        {formatNumber(discountedPrice)}원
      </Text>
    </div>
  );
}

export default PriceBox;

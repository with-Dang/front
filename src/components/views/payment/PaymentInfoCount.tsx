import { formatPrice } from "../../../utils/formatPrice";
import Text from "../../UI/atoms/text/Text";

import S from "./Payment.module.css";

const PaymentInfoCount = ({
  value,
  // setValue,
  title,
  price,
}: {
  value: number;
  title: string;
  price: number;
}) => {
  return (
    <div className={S.paymentInfoCount}>
      <span className={S.paymentInfoCount__front}>
        <Text fontSize="0.875rem">{title}</Text>
        <Text fontSize="0.875rem">{value}</Text>
        {/* <Stepper value={value} setValue={setValue} /> */}
      </span>
      <Text fontSize="0.875rem">{formatPrice(+price)}원</Text>
    </div>
  );
};

export default PaymentInfoCount;

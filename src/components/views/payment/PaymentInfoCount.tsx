import Stepper, { StepperType } from "../../UI/atoms/stepper/Stepper";
import Text from "../../UI/atoms/text/Text";

import S from "./Payment.module.css";

const PaymentInfoCount = ({ value, setValue }: StepperType) => {
  return (
    <div className={S.paymentInfoCount}>
      <span className={S.paymentInfoCount__front}>
        <Text fontSize="0.875rem">인원 수</Text>
        <Stepper value={value} setValue={setValue} />
      </span>
      <Text fontSize="0.875rem">18,000원</Text>
    </div>
  );
};

export default PaymentInfoCount;

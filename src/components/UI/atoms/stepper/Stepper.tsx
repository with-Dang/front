import { AiFillMinusCircle } from "@react-icons/all-files/ai/AiFillMinusCircle";
import { AiFillPlusCircle } from "@react-icons/all-files/ai/AiFillPlusCircle";
import Text from "../text/Text";

import { COLORS } from "../../../../styles/Color";
import S from "./Stepper.module.css";

export type StepperType = {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

function Stepper({ value, setValue }: StepperType) {
  const handleNum = (type: boolean) => () => {
    if (type) {
      // +
      setValue((prev) => prev + 1);
    } else {
      //  -
      setValue((prev) => (prev === 0 ? 0 : prev - 1));
    }
  };
  return (
    <div className={S.stepper}>
      <span className={S.stepper__icon} onClick={handleNum(false)}>
        <AiFillMinusCircle fill="#D9D9D9" color="#666" />
      </span>
      <span className={S.stepper__num}>
        <Text color={COLORS.text} fontSize="0.875rem">
          {value}
        </Text>
      </span>
      <span className={S.stepper__icon} onClick={handleNum(true)}>
        <AiFillPlusCircle fill="#D9D9D9" color="#666" />
      </span>
    </div>
  );
}

export default Stepper;

import { UseFormRegisterReturn } from "react-hook-form";
import Input from "../../atoms/input/Input";
import Text from "../../atoms/text/Text";

import S from "./InputBox.module.css";

type InputBoxProp = {
  isBtn: boolean;
  label: string;
  type: string;
  register: UseFormRegisterReturn;
  onClick?: () => void;
  // value?: string;
  // onChange?: React.Dispatch<React.SetStateAction<string>>;
};

const InputBox = ({ label, isBtn, type, register, onClick }: InputBoxProp) => {
  return (
    <div className={S.inputBox}>
      <Text fontWeight="700">{label}</Text>
      <Input
        isBtn={isBtn}
        type={type}
        register={register}
        onClick={onClick}
        button="중복확인"
      />
    </div>
  );
};

export default InputBox;

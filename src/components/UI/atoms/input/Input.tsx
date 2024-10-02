import { UseFormRegisterReturn } from "react-hook-form";
import Text from "../text/Text";
import S from "./Input.module.css";

type InputProp = {
  isBtn: boolean;
  type: string;
  button?: string;
  register: UseFormRegisterReturn;
};

const Input = ({
  isBtn = false,
  type = "text",
  button = "중복확인",
  register,
}: InputProp) => {
  return (
    <>
      {!isBtn ? (
        <input type={type} className={S.input} {...register} required />
      ) : (
        <span className={S.input__container}>
          <input
            type={type}
            className={`${S.input} ${S.input__empty}`}
            {...register}
            required
          />
          <button type="button" className={S.button}>
            <Text fontSize="0.75rem">{button}</Text>
          </button>
        </span>
      )}
    </>
  );
};

export default Input;

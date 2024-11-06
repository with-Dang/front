import { UseFormRegisterReturn } from "react-hook-form";
import { COLORS } from "../../../../styles/Color";
import Button from "../button/Button";
import S from "./Input.module.css";

type InputProp = {
  isBtn: boolean;
  type: string;
  button?: string;
  register: UseFormRegisterReturn;
  onClick?: () => void;
};

const Input = ({
  isBtn = false,
  type = "text",
  button = "중복확인",
  register,
  onClick = () => {},
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
          {onClick && (
            <Button
              color={COLORS.white}
              backgroundColor={COLORS.gray}
              fontSize="1rem"
              text={button}
              type="button"
              className={S.button}
              onClick={onClick}
            ></Button>
          )}
        </span>
      )}
    </>
  );
};

export default Input;

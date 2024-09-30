import Text from "../text/Text";
import S from "./Input.module.css";

type InputProp = {
  isBtn: boolean;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  type: string;
  button?: string;
};

const Input = ({
  isBtn = false,
  value = "",
  onChange,
  type = "text",
  button = "중복확인",
}: InputProp) => {
  return (
    <>
      {!isBtn ? (
        <input
          value={value}
          type={type}
          className={S.input}
          onChange={(e) => onChange(e.target.value)}
          required
        />
      ) : (
        <span className={S.input__container}>
          <input
            value={value}
            type={type}
            className={`${S.input} ${S.input__empty}`}
            onChange={(e) => onChange(e.target.value)}
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

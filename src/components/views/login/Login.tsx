import { useState } from "react";
import { mainLogo } from "../../../assets/png";
import { COLORS } from "../../../styles/Color";
import Button from "../../UI/atoms/button/Button";
import InputBox from "../../UI/molecules/inputBox/InputBox";

import { useLoginMutation } from "../../../hook/login/useLoginMutation";
import S from "./Login.module.css";

const Login = () => {
  const { mutate } = useLoginMutation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [disabled, setDisabled] = useState(false);

  const submitLogin = () => {
    mutate({
      email,
      password,
    });
    // console.log("🚀 ~ submitLogin ~ res:", res);
    setDisabled(true);
  };

  return (
    <div className={S.login}>
      <img src={mainLogo} alt="logo" className={S.login__img} />
      <form className={S.login__form}>
        <InputBox
          isBtn={false}
          label="이메일"
          type="email"
          value={email}
          onChange={setEmail}
        />
        <InputBox
          isBtn={false}
          label="비밀번호"
          type="password"
          value={password}
          onChange={setPassword}
        />
      </form>
      <Button
        text="로그인"
        color={COLORS.white}
        backgroundColor={COLORS.main}
        fontSize="1rem"
        onClick={submitLogin}
        disabled={disabled}
      />
    </div>
  );
};

export default Login;

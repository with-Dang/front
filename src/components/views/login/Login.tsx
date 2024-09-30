import { useState } from "react";
import InputBox from "../../molecules/inputBox/InputBox";

import { mainLogo } from "../../../assets/png";
import { COLORS } from "../../../styles/Color";
import Button from "../../atoms/button/Button";
import S from "./Login.module.css";

function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  return (
    <div className={S.login}>
      <img src={mainLogo} alt="mainLogo" className={S.login__img} />
      <form className={S.login__form}>
        <InputBox
          isBtn={false}
          label="아이디"
          type="text"
          value={id}
          onChange={setId}
        />
        <InputBox
          isBtn={false}
          label="비밀번호"
          type="password"
          value={pw}
          onChange={setPw}
        />
      </form>
      <Button
        txt="로그인"
        color={COLORS.white}
        backgroundColor={COLORS.main}
        fontSize="1rem"
      />
    </div>
  );
}

export default Login;

import { useState } from "react";
import { COLORS } from "../../../styles/Color";
import Button from "../../UI/atoms/button/Button";
import InputBox from "../../UI/molecules/inputBox/InputBox";

import Text from "../../UI/atoms/text/Text";
import S from "./SignUp.module.css";

const SignUp = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  return (
    <div className={S.signup}>
      <Text fontSize="1.5rem">회원가입</Text>
      <form className={S.signup__form}>
        <InputBox
          isBtn={true}
          label="아이디"
          type="text"
          value={id}
          onChange={setId}
          // button="중복확인"
        />
        <InputBox
          isBtn={false}
          label="이메일"
          type="email"
          value={pw}
          onChange={setPw}
        />
        <InputBox
          isBtn={false}
          label="비밀번호"
          type="password"
          value={pw}
          onChange={setPw}
        />
        <InputBox
          isBtn={false}
          label="비밀번호 확인"
          type="password"
          value={pw}
          onChange={setPw}
        />
        <InputBox
          isBtn={false}
          label="휴대폰 번호"
          type="phone"
          value={pw}
          onChange={setPw}
        />
      </form>
      <Button
        text="회원가입"
        color={COLORS.white}
        backgroundColor={COLORS.main}
        borderRadius=""
        fontSize="1rem"
      />
    </div>
  );
};

export default SignUp;

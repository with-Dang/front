import { SubmitHandler, useForm } from "react-hook-form";
import { useSignUpMutation } from "../../../hook/signup/useSignUpMutation";
import { COLORS } from "../../../styles/Color";
import Button from "../../UI/atoms/button/Button";
import Text from "../../UI/atoms/text/Text";
import InputBox from "../../UI/molecules/inputBox/InputBox";

import { message } from "antd";
import { useState } from "react";
import { useCheckEmailQuery } from "../../../hook/signup/useCheckEmailQuery";
import S from "./SignUp.module.css";

export type SignUpFormValues = {
  email: string;
  nickname: string;
  password: string;
  passwordChk: string;
  phone: string;
};

const SignUp = () => {
  const { register, handleSubmit, getValues } = useForm<SignUpFormValues>();
  const [isCheckEmail, setIsCheckEmail] = useState(false);
  const { mutate: signupMutate } = useSignUpMutation();
  const onSubmit: SubmitHandler<SignUpFormValues> = (data) => {
    if (getValues("password") !== getValues("passwordChk")) {
      message.error("비밀번호가 일치하지 않습니다.");
      return;
    } else if (!isCheckEmail) {
      message.error("이메일 중복 확인을 진행해주세요.");
      return;
    } else {
      signupMutate(data);
    }
  };

  const { triggerCheckEmail } = useCheckEmailQuery();
  const checkEmail = () => {
    const reg = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
    const email = getValues("email");
    if (!reg.test(email)) message.error("이메일 형식을 확인해주세요.");
    else {
      setIsCheckEmail(true);
      triggerCheckEmail(email);
    }
  };

  return (
    <div className={S.signup}>
      <Text fontSize="1.5rem">회원가입</Text>
      <form onSubmit={handleSubmit(onSubmit)} className={S.signup__form}>
        <InputBox
          isBtn={true}
          label="이메일"
          type="email"
          register={register("email", {
            required: true,
          })}
          onClick={checkEmail}
        />
        <InputBox
          isBtn={false}
          label="닉네임"
          type="type"
          register={register("nickname", {
            required: true,
          })}
        />
        <InputBox
          isBtn={false}
          label="비밀번호"
          type="password"
          register={register("password", {
            required: true,
          })}
        />
        <InputBox
          isBtn={false}
          label="비밀번호 확인"
          type="password"
          register={register("passwordChk", {
            required: true,
          })}
        />
        <InputBox
          isBtn={false}
          label="휴대폰 번호"
          type="phone"
          register={register("phone", {
            required: true,
          })}
        />
        <Button
          text="회원가입"
          color={COLORS.white}
          backgroundColor={COLORS.main}
          fontSize="1rem"
          type="submit"
        />
      </form>
    </div>
  );
};

export default SignUp;

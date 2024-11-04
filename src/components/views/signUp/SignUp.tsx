import { COLORS } from "../../../styles/Color";
import Button from "../../UI/atoms/button/Button";
import Text from "../../UI/atoms/text/Text";
import InputBox from "../../UI/molecules/inputBox/InputBox";

import { SubmitHandler, useForm } from "react-hook-form";
import { useSignUpMutation } from "../../../hook/signup/useSignUpMutation";
import S from "./SignUp.module.css";

export type SignUpFormValues = {
  id: string;
  email: string;
  nickname: string;
  password: string;
  passwordChk: string;
  phone: string;
};

const SignUp = () => {
  const { register, handleSubmit } = useForm<SignUpFormValues>();
  const { mutate: signupMutate } = useSignUpMutation();
  const onSubmit: SubmitHandler<SignUpFormValues> = (data) =>
    signupMutate(data);

  return (
    <div className={S.signup}>
      <Text fontSize="1.5rem">회원가입</Text>
      <form onSubmit={handleSubmit(onSubmit)} className={S.signup__form}>
        <InputBox
          isBtn={false}
          label="아이디"
          type="text"
          register={register("id")}
          // button="중복확인"
        />
        <InputBox
          isBtn={false}
          label="이메일"
          type="email"
          register={register("email")}
        />
        <InputBox
          isBtn={false}
          label="닉네임"
          type="type"
          register={register("nickname")}
        />
        <InputBox
          isBtn={false}
          label="비밀번호"
          type="password"
          register={register("password")}
        />
        <InputBox
          isBtn={false}
          label="비밀번호 확인"
          type="password"
          register={register("passwordChk")}
        />
        <InputBox
          isBtn={false}
          label="휴대폰 번호"
          type="phone"
          register={register("phone")}
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

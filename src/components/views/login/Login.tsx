import { mainLogo } from "../../../assets/png";
import { COLORS } from "../../../styles/Color";
import Button from "../../UI/atoms/button/Button";
import InputBox from "../../UI/molecules/inputBox/InputBox";

import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../../hook/login/useLoginMutation";
import Text from "../../UI/atoms/text/Text";
import { SignUpFormValues } from "../signUp/SignUp";
import S from "./Login.module.css";

export type LoginFormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const { mutate: loginMutate } = useLoginMutation();
  const { register, handleSubmit } = useForm<SignUpFormValues>();
  const onSubmit: SubmitHandler<SignUpFormValues> = (data) => loginMutate(data);

  const navigate = useNavigate();
  // const [disabled, setDisabled] = useState(false);

  return (
    <div className={S.login}>
      <img src={mainLogo} alt="logo" className={S.login__img} />
      <form onSubmit={handleSubmit(onSubmit)} className={S.login__form}>
        <InputBox
          isBtn={false}
          label="이메일"
          type="email"
          register={register("email")}
        />
        <InputBox
          isBtn={false}
          label="비밀번호"
          type="password"
          register={register("password")}
        />
        <Button
          text="로그인"
          color={COLORS.white}
          backgroundColor={COLORS.main}
          fontSize="1rem"
          type="submit"
        />
      </form>
      <div className={S.login__signup}>
        <Text color={COLORS.gray} fontSize="0.8125rem">
          <span onClick={() => navigate("/signup")}>회원가입</span>
        </Text>
      </div>
    </div>
  );
};

export default Login;

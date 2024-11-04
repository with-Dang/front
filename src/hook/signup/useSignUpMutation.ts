import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import { SignUpFormValues } from "../../components/views/signUp/SignUp";
import { commonApis } from "../commonApi";

// 회원가입 (/member/signup)

const API_URL = "/member/signup";
export function useSignUpMutation() {
  const navitgate = useNavigate();
  return useMutation<
    AxiosResponse<string>,
    Error,
    Omit<SignUpFormValues, "id" | "passwordChk">
  >({
    mutationFn: ({
      nickname,
      email,
      password,
      phone,
    }: Omit<SignUpFormValues, "id" | "passwordChk">) => {
      const body = {
        nickname: nickname,
        email: email,
        password: password,
        phone: phone,
      };
      return commonApis.post(API_URL, body);
    },
    onSuccess: (data) => {
      console.log(data);
      message.success("회원가입에 성공하였습니다.");
      navitgate("/login"); // 홈화면으로 이동
    },
    onError: (error) => {
      console.log(error);
      message.error("이미 존재하는 회원입니다.");
    },
  });
}

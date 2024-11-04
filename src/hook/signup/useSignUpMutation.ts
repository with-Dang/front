import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import axios, { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import { SignUpFormValues } from "../../components/views/signUp/SignUp";

// 회원가입 (/member/signup)

const BASE_URL = import.meta.env.VITE_API_URL;
const API_URL = "/member/signup";

export function useSignUpMutation() {
  const navitgate = useNavigate();
  return useMutation<
    AxiosResponse<string>,
    Error,
    Omit<SignUpFormValues, "passwordChk">
  >({
    mutationFn: ({
      nickname,
      email,
      password,
      phone,
    }: Omit<SignUpFormValues, "passwordChk">) => {
      const body = {
        nickname: nickname,
        email: email,
        password: password,
        phone: phone,
      };
      return axios.post(`${BASE_URL}${API_URL}`, body, {
        withCredentials: true,
      });
    },
    onSuccess: (data) => {
      console.log(data);
      message.success("회원가입에 성공하였습니다.");
      navitgate("/login"); // 홈화면으로 이동
    },
    onError: (error) => {
      console.log(error);
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 403) {
          message.error("이미 존재하는 회원입니다.");
        } else if (error.response?.status === 400) {
          message.error("비밀번호는 8자 이상이어야 합니다.");
        } else {
          message.error("에러가 발생했습니다. 다시 입력해주세요.");
        }
      }
    },
  });
}

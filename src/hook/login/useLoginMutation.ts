import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import { AxiosResponse } from "axios";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authSlice } from "../../redux/slice";
import { LoginProps } from "../../types/login/type";
import { commonApis } from "../commonApi";

// 로그인 (/auth/login)

const API_URL = "/auth/login";
export function useLoginMutation() {
  const navitgate = useNavigate();
  const [cookies, ,] = useCookies(["JSESSIONID"]);
  // const auth = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();

  return useMutation<AxiosResponse<string>, Error, LoginProps>({
    mutationFn: ({ email, password }: LoginProps) => {
      const body = {
        email: email,
        password: password,
      };
      return commonApis.post(API_URL, body);
    },
    onSuccess: (data) => {
      console.log(data);
      message.success("로그인에 성공하였습니다.");
      dispatch(authSlice.actions.set(cookies)); // redux에 쿠키값 저장
      navitgate("/"); // 홈화면으로 이동
    },
    onError: (error) => {
      console.log(error);
      if (error.message === "Request failed with status code 401") {
        message.error("이메일 혹은 비밀번호가 일치하지 않습니다.");
      }
    },
  });
}

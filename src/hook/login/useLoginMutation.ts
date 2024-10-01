import { useMutation } from "@tanstack/react-query";
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
  const [cookies, , removeCookie] = useCookies(["JSESSIONID"]);
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
      // TODO: 성공 알림
      // message.success
      dispatch(authSlice.actions.set(cookies)); // redux에 쿠키값 저장
      removeCookie("JSESSIONID"); // 쿠키 지우기
      navitgate("/"); // 홈화면으로 이동
    },
    onError: (error) => {
      console.log(error);
      // TODO: 실패 알림
    },
  });
}

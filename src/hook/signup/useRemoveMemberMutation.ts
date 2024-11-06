import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import { AxiosResponse } from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { commonApis } from "../commonApi";

// 회원탈퇴 (/member/delete)

const API_URL = "/member/delete";
export function useRemoveMemberMutation() {
  const navitgate = useNavigate();
  const [, , removeCookies] = useCookies(["JSESSIONID"]);

  return useMutation<AxiosResponse<string>, Error>({
    mutationFn: () => {
      return commonApis.delete(API_URL);
    },
    onSuccess: (data) => {
      console.log(data);
      message.success("회원탈퇴가 완료되었습니다.");
      removeCookies("JSESSIONID");
      navitgate("/"); // 홈화면으로 이동
    },
    onError: (error) => {
      console.log(error);
      message.error("에러가 발생했습니다.");
    },
  });
}

import room from "@assets/png/room.png";
import { message } from "antd";
import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useMemberQuery } from "../../../hook/mypage/useMemberQuery";
import { usePaymentStatusQuery } from "../../../hook/mypage/usePaymentStatusQuery";
import { COLORS } from "../../../styles/Color";
import Image from "../../UI/atoms/image/Image";
import Text from "../../UI/atoms/text/Text";
import RouterLabel from "../../UI/molecules/routerLabel/RouterLabel";
import S from "./Mypage.module.css";
import { MYPAGECONSTANTS } from "./constants";

function Mypage() {
  const { data: memberInfo } = useMemberQuery();
  console.log("🚀 ~ Mypage ~ memberInfo:", memberInfo);
  const infoItems = [
    { label: "이메일", value: memberInfo?.email ?? "" },
    { label: "휴대폰 번호", value: memberInfo?.phone ?? "" },
  ];

  const { data: paymentStatus } = usePaymentStatusQuery();
  const receiptItems = [
    { label: "수령 전", value: paymentStatus?.pending ?? 0 },
    { label: "공구 확정", value: paymentStatus?.success ?? 0 },
    { label: "공구 실패", value: paymentStatus?.fail ?? 0 },
  ];
  const navigate = useNavigate();
  const handleNavigate = (url: string) => {
    navigate(url);
  };
  const [, , removeCookies] = useCookies(["JSESSIONID"]);
  const handleBottomMenuClick = (path: string) => {
    if (path === "/logout") {
      console.log("로그아웃");
      removeCookies("JSESSIONID"); // 쿠키 삭제
      message.success("로그아웃 되었습니다.");
      handleNavigate("/");
    } else handleNavigate(path);
  };

  return (
    <div className={S.mypage}>
      <div className={S.mypage__profile__wrapper}>
        <div className={S.mypage__profile__background} />
        <div className={S.mypage__top}>
          <div className={S.mypage__profile}>
            <Image
              src={room}
              width="3.75rem"
              height="3.75rem"
              borderRadius="50%"
            />
            <span className={S.mypage__profile__name}>
              <Text color={COLORS.white} fontSize="1.5rem" fontWeight="700">
                {memberInfo?.nickname ?? ""}
              </Text>
              <Text color={COLORS.white} fontSize="1rem" fontWeight="400">
                님
              </Text>
            </span>
          </div>

          <div className={S.mypage__info__back}>
            <div className={S.mypage__info}>
              {infoItems.map((item, index) => (
                <span key={index} className={S.mypage__info__content}>
                  <Text
                    color={COLORS.text}
                    fontSize="0.875rem"
                    fontWeight="400"
                  >
                    {item.label}
                  </Text>
                  <Text
                    color={COLORS.gray}
                    fontSize="0.875rem"
                    fontWeight="400"
                  >
                    {item.value}
                  </Text>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={S.mypage__margin}>
        <div className={S.mypage__receipt__title}>
          <Text color={COLORS.text} fontSize="1.125rem" fontWeight="700">
            {MYPAGECONSTANTS.status.name}
          </Text>
        </div>
        <div className={S.mypage__receipt__content__back}>
          {receiptItems.map((item, index) => (
            <div key={index} className={S.mypage__receipt__content}>
              <Text
                color={COLORS.lightGray}
                fontSize="0.875rem"
                fontWeight="400"
              >
                {item.label}
              </Text>
              <Text color={COLORS.text} fontSize="1.25rem" fontWeight="700">
                {item.value}
              </Text>
            </div>
          ))}
        </div>
      </div>
      <div className={S.mypage__line} />

      <div className={S.backWhite}>
        <div className={S.mypage__margin}>
          <div className={S.mypage__menu}>
            {MYPAGECONSTANTS.menu.map((item, idx) => (
              <React.Fragment key={idx}>
                <RouterLabel
                  title={item.name}
                  color={COLORS.text}
                  fontSize="1rem"
                  fontWeight="300"
                  url={item.path}
                  fill={COLORS.lightGray}
                />
              </React.Fragment>
            ))}
          </div>

          <div className={S.mypage__control}>
            {MYPAGECONSTANTS.bottomMenu.map((item, idx) => (
              <React.Fragment key={idx}>
                <span onClick={() => handleBottomMenuClick(item.path)}>
                  <Text color={item.color} fontSize="0.875rem" fontWeight="300">
                    {item.name}
                  </Text>
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mypage;

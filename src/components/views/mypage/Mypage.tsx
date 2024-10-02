import room from "@assets/png/room.png";
import React from "react";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../../../styles/Color";
import Image from "../../UI/atoms/image/Image";
import Text from "../../UI/atoms/text/Text";
import RouterLabel from "../../UI/molecules/routerLabel/RouterLabel";
import Nav from "../../UI/organisms/nav/Nav";
import S from "./Mypage.module.css";
import { MYPAGECONSTANTS } from "./constants";

function Mypage() {
  const name = "이름";
  const userId = "isad";
  const phoneNumber = "010-3333-1234";
  const email = "skh@fajkfgb";
  const infoItems = [
    { label: "아이디", value: userId },
    { label: "이메일", value: email },
    { label: "휴대폰 번호", value: phoneNumber },
  ];
  const receiptItems = [
    { label: "수령 전", value: 1 },
    { label: "공구 확정", value: 2 },
    { label: "공구 실패", value: 3 },
  ];
  const navigate = useNavigate();
  const handleNavigate = (url: string) => {
    navigate(url);
  };
  const handleBottomMenuClick = (path: string) => {
    if (path === "/logout") {
      console.log("로그아웃");
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
                {name}
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
      <Nav/>
    </div>
  );
}

export default Mypage;

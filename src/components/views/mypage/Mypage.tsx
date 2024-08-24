import room from "@assets/png/room.png";
import React from "react";
import { useNavigate } from "react-router-dom";
import { IconReceipt } from "../../../assets/png";
import { COLORS } from "../../../styles/Color";
import Image from "../../atoms/image/Image";
import Text from "../../atoms/text/Text";
import RouterLabel from "../../molecules/routerLabel/RouterLabel";
import S from "./Mypage.module.css";
import { MYPAGECONSTANTS } from "./constants";

function Mypage() {
  const name = "이름";
  const phoneNumber = "010-3333-1234";
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
      <div className={S.mypage__profile}>
        <Image src={room} width="4rem" height="4rem" borderRadius="50%" />
        <div className={S.mypage__info}>
          <Text color={COLORS.text} fontSize="1rem" fontWeight="400">
            {name}
          </Text>
          <Text color={COLORS.gray} fontSize="0.75rem" fontWeight="400">
            {phoneNumber}
          </Text>
        </div>
        <div
          className={S.mypage__edit}
          onClick={() => handleNavigate(`${MYPAGECONSTANTS.edit.path}`)}
        >
          <Text color={COLORS.text} fontSize="0.625rem" fontWeight="400">
            {MYPAGECONSTANTS.edit.name}
          </Text>
        </div>
      </div>

      <div
        className={S.mypage__receipt}
        onClick={() => handleNavigate(`${MYPAGECONSTANTS.status.path}`)}
      >
        <Image
          src={IconReceipt}
          width="1.5rem"
          height="auto"
          borderRadius="0"
        />
        <Text color={COLORS.text} fontSize="1rem" fontWeight="300">
          {MYPAGECONSTANTS.status.name}
        </Text>
      </div>

      <div className={S.mypage__menu}>
        {MYPAGECONSTANTS.menu.map((item, idx) => (
          <React.Fragment key={idx}>
            <RouterLabel
              title={item.name}
              color={COLORS.text}
              fontSize="1rem"
              fontWeight="300"
              url={item.path}
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
  );
}

export default Mypage;

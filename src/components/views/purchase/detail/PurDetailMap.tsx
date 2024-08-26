import room from "@assets/png/room.png";
import Image from "../../../atoms/image/Image";
import Text from "../../../atoms/text/Text";

import S from "./PurDetail.module.css";

const PurDetailMap = () => {
  return (
    <div className={S.purDetail__info}>
      <Text>지도</Text>
      <div className={S.purDetail__line}></div>
      <Image src={room} width="100%" height="auto" borderRadius="7px" />
    </div>
  );
};

export default PurDetailMap;

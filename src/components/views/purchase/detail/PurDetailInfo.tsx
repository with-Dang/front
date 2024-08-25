import room from "@assets/png/room.png";
import Image from "../../../atoms/image/Image";
import Text from "../../../atoms/text/Text";

import S from "./PurDetail.module.css";

const PurDetailInfo = () => {
  return (
    <div className={S.purDetail__info}>
      <Text>상세 정보</Text>
      <div className={S.purDetail__line}></div>
      <Image src={room} width="100%" height="auto" borderRadius="7px" />
    </div>
  );
};

export default PurDetailInfo;

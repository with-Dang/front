import room from "@assets/png/room.png";
import { COLORS } from "../../../../styles/Color";
import Image from "../../../UI/atoms/image/Image";
import Text from "../../../UI/atoms/text/Text";

import S from "./Pick.module.css";

const PickImg = ({ title, intro }: { title: string; intro: string }) => {
  return (
    <div className={S.pickImg}>
      <Image
        src={room}
        width="100%"
        height="10%"
        borderRadius="7px"
        ratio={0.3}
      />
      <div className={S.pickImg__text}>
        <Text color={COLORS.white} fontSize="1.125rem">
          {title}
        </Text>
        <Text color={COLORS.white} fontSize="1rem">
          {intro}
        </Text>
      </div>
    </div>
  );
};

export default PickImg;

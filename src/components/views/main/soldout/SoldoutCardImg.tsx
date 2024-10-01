import room from "@assets/png/room.png";
import { IoMdTime } from "@react-icons/all-files/io/IoMdTime";
import { COLORS } from "../../../../styles/Color";
import IconLabel from "../../../UI/atoms/iconLabel/IconLabel";
import Image from "../../../UI/atoms/image/Image";

import S from "./Soldout.module.css";

const SoldoutCardImg = ({
  time,
  size,
}: {
  time: string;
  size?: "sm" | "lg";
}) => {
  return (
    <div className={S.soldoutCard__label}>
      <Image
        src={room}
        width="100%"
        height="auto"
        borderRadius="7px"
        ratio={1}
      />
      <span className={S.soldoutCard__time}>
        <IconLabel
          color={COLORS.white}
          backgroundColor={COLORS.lightRed}
          borderRadius="50px"
          text={time}
          size={size}
        >
          <IoMdTime />
        </IconLabel>
      </span>
    </div>
  );
};

export default SoldoutCardImg;

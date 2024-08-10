import room from "@assets/png/room.png";
import { IoMdTime } from "@react-icons/all-files/io/IoMdTime";
import { COLORS } from "../../../../styles/Color";
import IconLabel from "../../../atoms/iconLabel/IconLabel";
import Image from "../../../atoms/image/Image";

import S from "./Soldout.module.css";

const SoldoutCardImg = ({
  time
}: {
  time: string;
}) => {
  return (
    <div className={S.soldoutCard__label}>
      <Image
        src={room}
        width="100%"
        height="auto"
        borderRadius="7px"
      />
      <span className={S.soldoutCard__time}>
        <IconLabel
          color={COLORS.white}
          backgroundColor={COLORS.lightRed}
          borderRadius="50px"
          text={time}
        >
          <IoMdTime />
        </IconLabel>
      </span>
    </div>
  )
}

export default SoldoutCardImg
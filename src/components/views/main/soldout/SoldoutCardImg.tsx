import room from "@assets/png/room.png";
import { IoMdTime } from "@react-icons/all-files/io/IoMdTime";
import { COLORS } from "../../../../styles/Color";
import { calculateDate, isRemainDay } from "../../../../utils/formatDate";
import IconLabel from "../../../UI/atoms/iconLabel/IconLabel";
import Image from "../../../UI/atoms/image/Image";

import { useEffect, useState } from "react";
import S from "./Soldout.module.css";

const SoldoutCardImg = ({
  time,
  size,
  width = "100%",
  isFull = false,
  productPicture,
}: {
  time: string;
  size?: "sm" | "lg";
  width?: string;
  isFull?: boolean;
  productPicture?: string;
}) => {
  const [remainingTime, setRemainingTime] = useState<string>(
    calculateDate(time)
  );
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(calculateDate(time));
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);
  return (
    <div className={isFull ? S.soldoutCard__label : S.soldoutCard__label__full}>
      <Image
        src={productPicture ?? room}
        width={width}
        height={width}
        borderRadius="7px"
        ratio={1}
      />
      <span className={S.soldoutCard__time}>
        <IconLabel
          color={isRemainDay(time) ? COLORS.text : COLORS.white}
          backgroundColor={isRemainDay(time) ? COLORS.white : COLORS.lightRed}
          borderRadius="50px"
          text={remainingTime}
          size={size}
        >
          <IoMdTime />
        </IconLabel>
      </span>
    </div>
  );
};

export default SoldoutCardImg;

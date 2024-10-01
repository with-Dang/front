import { IoPersonCircle } from "@react-icons/all-files/io5/IoPersonCircle";
import { COLORS } from "../../../../styles/Color";
import { SoldoutProps } from "../../../../types/home";
import IconLabel from "../../../UI/atoms/iconLabel/IconLabel";
import Text from "../../../UI/atoms/text/Text";
import SoldoutCardImg from "./SoldoutCardImg";

import S from "./Soldout.module.css";

const SoldoutCard = ({
  name,
  id,
  location,
  price,
  discount,
  time,
  totalPeople,
  people,
}: SoldoutProps) => {
  return (
    <div className={S.soldoutCard} key={id}>
      <SoldoutCardImg time={time} />
      <IconLabel
        color={COLORS.text}
        backgroundColor={COLORS.whiteGray}
        borderRadius="3px"
        text={`${people}/${totalPeople}`}
        size="sm"
      >
        <IoPersonCircle />
      </IconLabel>

      <div className={S.soldoutCard__title}>
        <Text color={COLORS.text} fontSize="1rem">
          {name}
        </Text>
        <Text color={COLORS.gray} fontSize="0.75rem">
          {location}
        </Text>
      </div>
      <div className={S.soldoutCard__price}>
        <Text color={COLORS.red} fontSize="0.75rem">
          {discount}%
        </Text>
        <Text color={COLORS.text} fontSize="0.75rem">
          {price}원
        </Text>
      </div>
    </div>
  );
};

export default SoldoutCard;

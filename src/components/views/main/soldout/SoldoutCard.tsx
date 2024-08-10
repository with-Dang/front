import { IoPersonCircle } from "@react-icons/all-files/io5/IoPersonCircle";
import Text from "../../../../components/atoms/text/Text";
import { COLORS } from "../../../../styles/Color";
import { SoldoutProps } from "../../../../types/home";
import IconLabel from "../../../atoms/iconLabel/IconLabel";
import SoldoutCardImg from "./SoldoutCardImg";

import S from "./Soldout.module.css";

const SoldoutCard = ({
  name,
  location,
  price,
  discount,
  time,
  totalPeople,
  people
}: SoldoutProps) => {
  return (
    <div className={S.soldoutCard}>
      <SoldoutCardImg 
        time={time}
      />
      <IconLabel 
        color={COLORS.text}
        backgroundColor={COLORS.whiteGray}
        borderRadius="3px"
        text={`${totalPeople}/${people}`}
      >
        <IoPersonCircle />
      </IconLabel>

      <Text
        color={COLORS.text}
        fontSize="1rem"
      >{name}</Text>
      <Text
        color={COLORS.gray}
        fontSize="0.75rem"
      >{location}</Text>
      <div className="soldoutCard__price">
        <Text
          color={COLORS.red}
          fontSize="0.75rem"
        >{discount}%</Text>
        <Text
          color={COLORS.text}
          fontSize="0.75rem"
        >{price}원</Text>
      </div>
    </div>
  )
}

export default SoldoutCard
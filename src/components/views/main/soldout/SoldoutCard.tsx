import { IoPersonCircle } from "@react-icons/all-files/io5/IoPersonCircle";
import { COLORS } from "../../../../styles/Color";
import { SoldoutProps } from "../../../../types/home";
import IconLabel from "../../../UI/atoms/iconLabel/IconLabel";
import Text from "../../../UI/atoms/text/Text";
import SoldoutCardImg from "./SoldoutCardImg";

import { useNavigate } from "react-router-dom";
import { calculatePrice, formatPrice } from "../../../../utils/formatPrice";
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
  productPicture,
}: SoldoutProps) => {
  const navigate = useNavigate();
  const MAXTEXTLENGTH = 20;
  const truncatedName =
    name.length > MAXTEXTLENGTH
      ? `${name.substring(0, MAXTEXTLENGTH)}...`
      : name;
  const truncatedLocation = location
    ? location.length > MAXTEXTLENGTH + 7
      ? `${location.substring(0, MAXTEXTLENGTH + 7)}...`
      : location
    : "";
  return (
    <div
      className={S.soldoutCard}
      key={id}
      onClick={() => navigate(`/purchase/${id}`)}
    >
      <SoldoutCardImg
        time={time.split("T")[1]}
        isFull={true}
        productPicture={productPicture}
        width="17rem"
      />
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
        <span className={S.soldoutCard__name}>{truncatedName}</span>
        <span className={S.soldoutCard__location}>{truncatedLocation}</span>
      </div>
      <div className={S.soldoutCard__price}>
        <Text color={COLORS.red} fontSize="0.75rem">
          {discount}%
        </Text>
        <Text color={COLORS.text} fontSize="0.75rem">
          {formatPrice(+calculatePrice(discount, price))}원
        </Text>
      </div>
    </div>
  );
};

export default SoldoutCard;

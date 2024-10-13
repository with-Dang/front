import { COLORS } from "../../../styles/Color";
import { SoldoutProps } from "../../../types/home";
import Text from "../../UI/atoms/text/Text";
import SoldoutCardImg from "../main/soldout/SoldoutCardImg";

import { useNavigate } from "react-router-dom";
import { calculatePrice, formatPrice } from "../../../utils/formatPrice";
import Progress from "../../UI/molecules/progress/Progress";
import S from "../main/soldout/Soldout.module.css";
import P from "./Purchase.module.css";

const PurchaseCard = ({
  id,
  name,
  location,
  price,
  discount,
  time,
  totalPeople,
  people,
  productPicture,
}: SoldoutProps) => {
  const navigate = useNavigate();
  return (
    <div className={P.parchaseCard} onClick={() => navigate(`/purchase/${id}`)}>
      <SoldoutCardImg time={time} size="lg" productPicture={productPicture} />

      <div className={S.soldoutCard__title}>
        <span className={S.soldoutCard__name}>{name}</span>
        <span className={S.soldoutCard__location}>{location}</span>
      </div>
      <div className={S.soldoutCard__price}>
        <Text color={COLORS.red} fontSize="0.75rem">
          {discount}%
        </Text>
        <Text color={COLORS.text} fontSize="0.75rem">
          {formatPrice(+calculatePrice(discount, price))}원
        </Text>
      </div>

      <Progress currentNum={+people} totalNum={+totalPeople} />
    </div>
  );
};

export default PurchaseCard;

import { IoPersonCircle } from "@react-icons/all-files/io5/IoPersonCircle";
import { COLORS } from "../../../../styles/Color";
import IconLabel from "../../../UI/atoms/iconLabel/IconLabel";
import Image from "../../../UI/atoms/image/Image";
import Text from "../../../UI/atoms/text/Text";

import { calculatePrice, formatPrice } from "../../../../utils/formatPrice";
import S from "./PurDetail.module.css";

// TODO: 나중에 따로 빼기
type PurDetailMainProps = {
  id: number;
  name: string;
  location: string;
  price: number;
  rate: number;
  people: number;
  totalPeople: number;
  productPicture: string;
};

const PurDetailMain = ({
  id,
  name,
  location,
  price,
  rate,
  people,
  totalPeople,
  productPicture,
}: PurDetailMainProps) => {
  return (
    <main key={id}>
      <Image
        src={productPicture}
        width="100%"
        height="10%"
        borderRadius="7px"
        ratio={0.6}
      />

      <div className={S.purDetailMain__content}>
        <div className={S.purDetailMain__content__header}>
          <span className={S.purDetailMain__content__title}>
            <Text color={COLORS.text} fontSize="1.25rem">
              {name}
            </Text>
          </span>
          <span>
            <IconLabel
              color={COLORS.main}
              backgroundColor={COLORS.white}
              borderRadius="50px"
              text={`${people}/${totalPeople}`}
              border={COLORS.main}
              size="lg"
            >
              <IoPersonCircle />
            </IconLabel>
          </span>
        </div>
        <Text color={COLORS.gray} fontSize="0.8125rem">
          {location}
        </Text>
        <div className={S.purDetailMain__content__price}>
          <Text color={COLORS.lightGray} fontSize="0.75rem">
            {rate}%
          </Text>
          <Text color={COLORS.lightGray} fontSize="0.75rem">
            <del>{formatPrice(+price)}원</del>
          </Text>
        </div>
        <Text color={COLORS.red} fontSize="1.125rem">
          {formatPrice(+calculatePrice(rate, price))}원
        </Text>
      </div>
    </main>
  );
};

export default PurDetailMain;

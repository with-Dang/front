import room from "@assets/png/room.png";
import { IoPersonCircle } from "@react-icons/all-files/io5/IoPersonCircle";
import { COLORS } from "../../../../styles/Color";
import IconLabel from "../../../UI/atoms/iconLabel/IconLabel";
import Image from "../../../UI/atoms/image/Image";
import Text from "../../../UI/atoms/text/Text";

import S from "./PurDetail.module.css";

// TODO: 나중에 따로 빼기
type PurDetailMainProps = {
  id: number;
  name: string;
  location: string;
  price: string;
  rate: number;
  people: number;
  totalPeople: number;
};

const PurDetailMain = ({
  id,
  name,
  location,
  price,
  rate,
  people,
  totalPeople,
}: PurDetailMainProps) => {
  return (
    <main key={id}>
      <Image
        src={room}
        width="100%"
        height="10%"
        borderRadius="7px"
        ratio={0.6}
      />

      <div className={S.purDetailMain__content}>
        <div className={S.purDetailMain__content__header}>
          <span>
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
            <del>{price}원</del>
          </Text>
        </div>
        <Text color={COLORS.red} fontSize="1.125rem">
          {price}원
        </Text>
      </div>
    </main>
  );
};

export default PurDetailMain;

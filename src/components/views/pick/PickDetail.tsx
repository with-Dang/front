import room from "@assets/png/room.png";
import { usePickItemDetailQuery } from "../../../hook/pick/usePickItemDetailQuery";
import { COLORS } from "../../../styles/Color";
import Image from "../../atoms/image/Image";
import Text from "../../atoms/text/Text";
import S from "./Pick.module.css";

function PickDetail() {
  const { data: pickItemDetail } = usePickItemDetailQuery();
  return (
    <div className={S.pickDetail}>
      <Image
        src={room}
        borderRadius="0.3125rem 0.3125rem 0rem 0rem"
        width="100%"
        height="13.125rem"
      />
      <span className={S.pickDetail__text__top}>
        <Text color={COLORS.text} fontSize="1.25rem" fontWeight="700">
          {pickItemDetail?.title}
        </Text>
        <Text color={COLORS.lightGray} fontSize="1rem" fontWeight="400">
          {pickItemDetail?.addr1 + " " + pickItemDetail?.addr2}
        </Text>
      </span>
      <div className={S.pickDetail__line} />
      <span className={S.pickDetail__text__bottom}>
        <Text color="#343434" fontSize="0.75rem" fontWeight="400">
          {pickItemDetail?.overview}
        </Text>
      </span>
    </div>
  );
}
export default PickDetail;

import room from "@assets/png/room.png";
import { COLORS } from "../../../styles/Color";
import Image from "../../UI/atoms/image/Image";
import Text from "../../UI/atoms/text/Text";
import S from "./Pick.module.css";

const item = {
  title: "비치 코코넛 카페",
  address: "울산광역시 가톨릭구 가톨릭동 111-11",
  content: `비치 코코넛 카페는 어쩌구.. 저쩌구.. 울산에 있습니다. 반려견 동반 가능 ㅇ
 동해물과 백두\n산이 마르고 닳도록 하느님이 보우하사 우리나라만세 무궁화 삼천리 화려강...
    `,
  id: 3,
};
function PickDetail() {
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
          {item.title}
        </Text>
        <Text color={COLORS.lightGray} fontSize="1rem" fontWeight="400">
          {item.address}
        </Text>
      </span>
      <div className={S.pickDetail__line} />
      <span className={S.pickDetail__text__bottom}>
        <Text color="#343434" fontSize="0.75rem" fontWeight="400">
          {item.content}
        </Text>
      </span>
    </div>
  );
}
export default PickDetail;

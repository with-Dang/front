import React from "react";
import { COLORS } from "../../../styles/Color";
import Text from "../../UI/atoms/text/Text";
import S from "./Pick.module.css";
import PickItem from "./PickItem";

const test = [
  {
    title: "비치 코코넛 카페",
    address: "울산광역시 가톨릭구 가톨릭동 111-11",
    content:
      "비치 코코넛 카페는 어쩌구.. 저쩌구.. 울산에 있습니다. 반려견 동반 가능 ㅇㅇ 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세 무궁화 삼천리 화려강",
    id: 1,
  },
  {
    title: "비치 코코넛 카페",
    address: "울산광역시 가톨릭구 가톨릭동 111-11",
    content:
      "비치 코코넛 카페는 어쩌구.. 저쩌구.. 울산에 있습니다. 반려견 동반 가능 ㅇㅇ 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세 무궁화 삼천리 화려강131sdsasvdavasdasdsadsadsadsadsadsadsads",
    id: 2,
  },
  {
    title: "비치 코코넛 카페",
    address: "울산광역시 가톨릭구 가톨릭동 111-11",
    content:
      "비치 코코넛 카페는 어쩌구.. 저쩌구.. 울산에 있습니다. 반려견 동반 가능 ㅇㅇ 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세 무궁화 삼천리 화려강...",
    id: 3,
  },
];
// interface PickContextProps {
//   title?: string;
//   address?: string;
//   content?: string;
//   img?: string;
// }
function PickList() {
  return (
    <div className={S.pickList}>
      <div className={S.pickList__title}>
        <Text color={COLORS.text} fontSize="1.25rem" fontWeight="700">
          울산 여행지 Pick
        </Text>
      </div>
      {test.map((item, idx) => (
        <React.Fragment key={idx}>
          <PickItem
            title={item.title}
            content={item.content}
            address={item.address}
            id={item.id}
          />
        </React.Fragment>
      ))}
    </div>
  );
}
export default PickList;

import React from "react";
import { usePickItemListQuery } from "../../../hook/pick/usePickItemListQuery";
import { COLORS } from "../../../styles/Color";
import Text from "../../atoms/text/Text";
import S from "./Pick.module.css";
import PickItem from "./PickItem";

function PickList() {
  const { data: pickList } = usePickItemListQuery();

  return (
    <div className={S.pickList}>
      <div className={S.pickList__title}>
        <Text color={COLORS.text} fontSize="1.25rem" fontWeight="700">
          울산 여행지 Pick
        </Text>
      </div>
      {pickList?.tourItems?.map((item, idx) => (
        <React.Fragment key={idx}>
          <PickItem
            title={item.title}
            content={item.overview}
            address={item.addr1 + ` ` + item.addr2}
            id={Number(item.contentid)}
          />
        </React.Fragment>
      ))}
    </div>
  );
}
export default PickList;

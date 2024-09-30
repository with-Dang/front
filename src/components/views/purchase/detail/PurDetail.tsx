import { COLORS } from "../../../../styles/Color";
import Button from "../../../atoms/button/Button";
import { PurDetailData } from "./PurDetail.const";
import PurDetailInfo from "./PurDetailInfo";
import PurDetailMain from "./PurDetailMain";
import PurDetailMap from "./PurDetailMap";

import { useState } from "react";
import BottomSheet from "../../../organisms/bottomSheet/BottomSheet";
import S from "./PurDetail.module.css";

const PurDetail = () => {
  const { id, name, location, price, rate, people, totalPeople } =
    PurDetailData;

  const [sheetOpen, setSheetOpen] = useState(false);
  const toggleSheetOpen = () => setSheetOpen((prev) => !prev);

  return (
    <div className={S.purDetail}>
      <div>
        <PurDetailMain
          id={id}
          name={name}
          location={location}
          price={price}
          rate={rate}
          people={people}
          totalPeople={totalPeople}
        />
        <PurDetailMap />
        <PurDetailInfo />
      </div>
      <div className={S.purDetail__btn__container}>
        <Button
          color={COLORS.white}
          backgroundColor={COLORS.main}
          borderRadius="15px"
          fontSize="1.25rem"
          text="구매하기"
          padding="1.5rem"
          onClick={toggleSheetOpen}
          className={S.purDetail__btn}
        />
      </div>
      {sheetOpen && <BottomSheet onClick={toggleSheetOpen} />}
    </div>
  );
};

export default PurDetail;

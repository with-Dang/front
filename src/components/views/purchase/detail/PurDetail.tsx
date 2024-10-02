import { COLORS } from "../../../../styles/Color";
import Button from "../../../UI/atoms/button/Button";
import PurDetailInfo from "./PurDetailInfo";
import PurDetailMain from "./PurDetailMain";

import { useState } from "react";
import { useLocation } from "react-router-dom";
import { usePurchaseDetailQuery } from "../../../../hook/purchase/usePurchaseDetailQuery";
import BottomSheet from "../../../UI/organisms/bottomSheet/BottomSheet";
import S from "./PurDetail.module.css";

const PurDetail = () => {
  const { pathname } = useLocation();
  const pathnameList = pathname.split("/");

  const { data: detailData } = usePurchaseDetailQuery(
    +pathnameList[pathnameList.length - 1]
  );

  const [sheetOpen, setSheetOpen] = useState(false);
  const toggleSheetOpen = () => setSheetOpen((prev) => !prev);

  return (
    <div className={S.purDetail}>
      <div>
        <PurDetailMain
          id={detailData?.id ?? 0}
          name={detailData?.productName ?? ""}
          location={detailData?.address ?? ""}
          price={detailData?.price ?? 0}
          rate={detailData?.discountRate ?? 0}
          people={detailData?.currentPersonnel ?? 0}
          totalPeople={detailData?.closePersonnel ?? 0}
          productPicture={detailData?.productPicture ?? ""}
        />
        {/* <PurDetailMap /> */}
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
      {sheetOpen && (
        <BottomSheet onClick={toggleSheetOpen} id={detailData?.id ?? 0} />
      )}
    </div>
  );
};

export default PurDetail;

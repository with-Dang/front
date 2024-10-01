import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../../../../styles/Color";
import Button from "../../atoms/button/Button";
import Stepper from "../../atoms/stepper/Stepper";
import Text from "../../atoms/text/Text";
import S from "./BottomSheet.module.css";
import BottomSheetOverlay from "./BottomSheetOverlay";

const BottomSheet = ({ onClick }: { onClick: () => void }) => {
  const navigate = useNavigate();
  const [perCnt, setPerCnt] = useState(0);
  const [petCnt, setPetCnt] = useState(0);

  const handlePayment = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    navigate("/payment");
  };

  return (
    <BottomSheetOverlay onClick={onClick} className={S.bottomSheet__overlay}>
      <main className={S.bottomSheet}>
        <div className={S.bottomSheet__container}>
          <Text fontSize="1.125rem">인원</Text>
          <div className={S.bottomSheet__content}>
            <div className={S.bottomSheet__counter}>
              <Text>인원 수</Text>
              <Stepper value={perCnt} setValue={setPerCnt} />
            </div>
            <div className={S.bottomSheet__counter}>
              <Text>강아지 마리</Text>
              <Stepper value={petCnt} setValue={setPetCnt} />
            </div>
          </div>
          <Button
            className={S.bottomSheet__btn}
            color={COLORS.white}
            backgroundColor={COLORS.main}
            borderRadius="1.875rem"
            fontSize="1.125rem"
            text="구매하기"
            onClick={handlePayment}
          />
        </div>
      </main>
    </BottomSheetOverlay>
  );
};

export default BottomSheet;

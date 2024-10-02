import { useNavigate } from "react-router-dom";
import room from "../../../assets/png/room.png";
import { COLORS } from "../../../styles/Color";
import Image from "../../UI/atoms/image/Image";
import Text from "../../UI/atoms/text/Text";
import S from "./PaymentHistoyDetail.module.css";
import { PaymentHistoryDetailPersonnel } from "./components/PaymentHistoryDetailPersonnel";
import { PaymentHistoryPriceBox } from "./components/PaymentHistoryPriceBox";
function PaymentHistoyDetail() {
  const navigate = useNavigate();
  const isCancel = true;
  const date = "2022-22-22";
  const itemImg = room;
  const itemTitle = "세이보리 홀리데이";
  const address = "울산광역시 가톨릭구 가톨릭동 111-11";
  const discountRate = 20;
  const price = 20000;
  const numberOfPeople = 1;
  const numberOfPuppies = 2;
  const cancelPath = "/cancel/2";
  const handleCancel = () => {
    if (cancelPath) {
      navigate(cancelPath);
    }
  };

  return (
    <>
      <div
        className={`${S.paymentHistoryDetail} ${isCancel ? S.canceled : ""}`}
      >
        <div className={S.paymentHistoryDetail__data}>
          <Text color={COLORS.text} fontSize="1rem" fontWeight="700">
            {date}
          </Text>
        </div>
        <div className={S.paymentHistoryDetail__content}>
          <Image
            src={itemImg}
            width="4rem"
            height="4rem"
            borderRadius="0.1875rem"
          />
          <div className={S.paymentHistoryDetail__content__info}>
            <Text color={COLORS.text} fontSize="1rem" fontWeight="700">
              {itemTitle}
            </Text>
            <Text color={COLORS.lightGray} fontSize="0.75rem" fontWeight="400">
              {address}
            </Text>
            <PaymentHistoryDetailPersonnel
              person={numberOfPeople}
              puppies={numberOfPuppies}
            />
          </div>
        </div>
        <div className={S.paymentHistoryDetail__line} />
        <PaymentHistoryPriceBox price={price} discountRate={discountRate} />
      </div>

      {isCancel && (
        <div className={S.paymentHistoryDetail__button} onClick={handleCancel}>
          <Text color={COLORS.lightGray} fontSize="0.75rem" fontWeight="600">
            결제취소
          </Text>
        </div>
      )}
    </>
  );
}

export default PaymentHistoyDetail;

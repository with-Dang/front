import { useNavigate } from "react-router-dom";
import room from "../../../../assets/png/room.png";
import { COLORS } from "../../../../styles/Color";
import Image from "../../../atoms/image/Image";
import Text from "../../../atoms/text/Text";
import RouterLabel from "../../../molecules/routerLabel/RouterLabel";
import S from "./PaymentHistoryCard.module.css";

type paymentHistoryCardProps = {
  state: "수령 전" | "공구 확정" | "공구 실패";
  data: string;
  itemImg?: string;
  itemTitle: string;
  address: string;
  discountRate: number;
  price: number;
  path: string;
  cancelPath?: string;
};

export const PaymentHistoryCard = ({
  state,
  data,
  itemImg = room,
  itemTitle,
  address,
  discountRate,
  price,
  path,
  cancelPath,
}: paymentHistoryCardProps) => {
  const navigate = useNavigate();
  const discountedPrice = Math.round(price * (1 - 0.01 * discountRate)); //소수점 반올림
  const handleCancel = () => {
    if (cancelPath) {
      navigate(cancelPath);
    }
  };
  return (
    <div>
      <RouterLabel
        title={data}
        color={COLORS.lightGray}
        fontSize="0.875rem"
        fontWeight="700"
        url={`/${path}`} //수정필요
        fill={COLORS.lightGray}
      />
      <div
        style={{
          display: "flex",
          marginTop: "0.63rem",
          marginBottom: "0.5rem",
        }}
      >
        <Text color={COLORS.lightGray} fontSize="0.875rem" fontWeight="700">
          {state}
        </Text>
      </div>
      <div className={S.paymentHistory__item}>
        <Image
          src={itemImg}
          width="4.875rem"
          height="5.25rem"
          borderRadius="0.1875rem"
        />
        <div className={S.paymentHistory__item__content}>
          <Text color={COLORS.text} fontSize="1rem" fontWeight="700">
            {itemTitle}
          </Text>
          <Text color={COLORS.lightGray} fontSize="0.75rem" fontWeight="400">
            {address}
          </Text>
          <span className={S.paymentHistory__item__content__discount}>
            <Text color={COLORS.lightGray} fontSize="0.875rem" fontWeight="400">
              {discountRate}%
            </Text>
            <Text color={COLORS.lightGray} fontSize="0.75rem" fontWeight="400">
              {price}원
            </Text>
          </span>
          <Text color={COLORS.lightRed} fontSize="1rem" fontWeight="400">
            {discountedPrice}원
          </Text>
        </div>
      </div>
      {state === "수령 전" ? (
        <div className={S.paymentHistory__button} onClick={handleCancel}>
          <Text color={COLORS.lightGray} fontSize="0.75rem" fontWeight="600">
            결제취소
          </Text>
        </div>
      ) : (
        <div className={S.paymentHistory__line} />
      )}
    </div>
  );
};

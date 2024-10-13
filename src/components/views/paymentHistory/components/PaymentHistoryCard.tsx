import { useNavigate } from "react-router-dom";
import room from "../../../../assets/png/room.png";
import { COLORS } from "../../../../styles/Color";
import { formatDate } from "../../../../utils/formatDate";
import Image from "../../../UI/atoms/image/Image";
import Text from "../../../UI/atoms/text/Text";
import PriceBox from "../../../UI/molecules/priceBox/PriceBox";
import RouterLabel from "../../../UI/molecules/routerLabel/RouterLabel";
import S from "./PaymentHistoryCard.module.css";

type paymentHistoryCardProps = {
  // state: "수령 전" | "공구 확정" | "공구 실패";
  // data: string;
  itemImg?: string;
  // itemTitle: string;
  address: string;
  // discountRate: number;
  // price: number;
  // path: string;
  // cancelPath?: string;

  orderId: string;
  orderName: string;
  status: string; //"DONE";
  // requestedAt: string;
  date: string;
  totalAmount: number;
  discount: number | null;
};
// SimplePaymentHistoryItem
export const PaymentHistoryCard = ({
  orderId,
  orderName,
  status,
  date,
  totalAmount,
  discount,
  itemImg = room,
  address,
}: paymentHistoryCardProps) => {
  const navigate = useNavigate();
  const handleCancel = () => {
    if (orderId) {
      navigate(`/payment/history/${orderId}`); // todo:: cancel 나오면 바꾸기
    }
  };
  return (
    <div>
      <RouterLabel
        title={formatDate(date)}
        color={COLORS.lightGray}
        fontSize="0.875rem"
        fontWeight="700"
        url={`/payment-history/detail?${orderId}`} //수정필요
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
          {status}
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
          <span className={S.paymentHistory__item__content_fristSpan}>
            <Text color={COLORS.text} fontSize="1rem" fontWeight="700">
              {orderName}
            </Text>
          </span>
          <Text color={COLORS.lightGray} fontSize="0.75rem" fontWeight="400">
            {address}
          </Text>
          <PriceBox discountRate={discount? discount : 0} price={totalAmount} />
        </div>
      </div>
      {status === "수령 전" ? (
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

import React, { useState } from "react";
import { usePaymentHistoryQuery } from "../../../hook/history/usePaymentHistoryQuery";
import { COLORS } from "../../../styles/Color";
import {
  PaymentHistory,
  SimplePaymentHistoryItem,
} from "../../../types/paymentHistory";
import Text from "../../UI/atoms/text/Text";
import { PaymentHistoryCard } from "./components/PaymentHistoryCard";
import { PAYMENTHISTORY } from "./constants/constant";
import S from "./PaymentHistoy.module.css";
function PaymentHistoy() {
  const [select, setSelect] = useState<"progress" | "complete">("progress");
  const { data: history } = usePaymentHistoryQuery();
  console.log(history);

  const extractSimplePaymentHistoryItems = (
    items: PaymentHistory
  ): SimplePaymentHistoryItem[] => {
    return items.receipts.map((item) => ({
      orderId: item.orderId, //결제 고유키
      orderName: item.orderName, //결제이름
      status: item.status, //진행상태
      requestedAt: item.requestedAt,
      approvedAt: item.approvedAt, //결제 승인 날짜
      totalAmount: item.totalAmount, //전체금액
      discount: item.discount,
    }));
  };
  const simpleItems = history ? extractSimplePaymentHistoryItems(history) : [];
  console.log(simpleItems);
  const handleSelect = (type: "progress" | "complete") => {
    setSelect(type);
  };
  return (
    <div className={S.paymentHistory}>
      <div className={S.paymentHistory__menu}>
        {PAYMENTHISTORY.map((item) => (
          <div
            key={item.name}
            className={`${S.paymentHistory__menu__item} ${
              select === item.type ? S.selected : ""
            }`}
            onClick={() => handleSelect(item.type)}
          >
            <Text
              color={select === item.type ? COLORS.white : COLORS.gray}
              fontSize="0.875rem"
              fontWeight="700"
            >
              {item.name}
            </Text>
          </div>
        ))}
      </div>
      <div className={S.paymentHistory__list}>
        {select === "progress"
          ? simpleItems.map((item, idx) => (
              <React.Fragment key={idx}>
                <PaymentHistoryCard
                  status={item.status}
                  date={item.approvedAt}
                  orderName={item.orderName}
                  address={item.approvedAt} //주소가 없는뎅..?
                  discount={item.discount}
                  totalAmount={item.totalAmount}
                  orderId={item.orderId}
                />
              </React.Fragment>
            ))
          : simpleItems.map((item, idx) => (
              <React.Fragment key={idx}>
                <PaymentHistoryCard
                  status={item.status}
                  date={item.approvedAt}
                  orderName={item.orderName}
                  address={item.approvedAt} //주소가 없는뎅..?
                  discount={item.discount}
                  totalAmount={item.totalAmount}
                  orderId={item.orderId}
                />
              </React.Fragment>
            ))}
      </div>
    </div>
  );
}

export default PaymentHistoy;

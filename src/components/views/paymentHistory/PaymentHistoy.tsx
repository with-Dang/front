import React, { useState } from "react";
import { COLORS } from "../../../styles/Color";
import Text from "../../atoms/text/Text";
import { PaymentHistoryCard } from "./components/PaymentHistoryCard";
import { PAYMENTHISTORY, PAYMENTHISTORYTEST, PAYMENTHISTORYTEST2 } from "./constants/constant";
import S from "./PaymentHistoy.module.css";
function PaymentHistoy() {
  const [select, setSelect] = useState<"progress" | "complete">("progress");
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
          ? PAYMENTHISTORYTEST.map((item, idx) => (
              <React.Fragment key={idx}>
                <PaymentHistoryCard
                  state={"수령 전"}
                  data={item.data}
                  itemTitle={item.itemTitle}
                  address={item.address}
                  discountRate={item.discountRate}
                  price={item.price}
                  path={item.path}
                  cancelPath={item.cancelPath}
                />
              </React.Fragment>
            ))
          : PAYMENTHISTORYTEST2.map((item, idx) => (
              <React.Fragment key={idx}>
                <PaymentHistoryCard
                  state={item.state}
                  data={item.data}
                  itemTitle={item.itemTitle}
                  address={item.address}
                  discountRate={item.discountRate}
                  price={item.price}
                  path={item.path}
                  cancelPath={item.cancelPath}
                />
              </React.Fragment>
            ))}
      </div>
    </div>
  );
}

export default PaymentHistoy;

import { useState } from "react";
import PaymentInfo from "./PaymentInfo";
import PaymentMethod from "./PaymentMethod";
import PaymentPrice from "./PaymentPrice";

function Payment() {
  const paymentInfoData = {
    title: "세이보리 홀리데이",
    location: "울산광역시 가톨릭구 가톨릭동 111-11",
  };

  const [price, setPrice] = useState(0);

  // const handlePayment = () => {
  //   console.log("결제하기");
  // };

  return (
    <div style={{ margin: "0 auto", width: "90%", paddingTop: "2.75rem" }}>
      <div>
        <PaymentInfo
          title={paymentInfoData.title}
          location={paymentInfoData.location}
          setPrice={setPrice}
        />
        <PaymentMethod price={price} />
        <PaymentPrice />
      </div>
      {/* <Button
        color={COLORS.white}
        backgroundColor={COLORS.main}
        borderRadius="50px"
        fontSize="1.125rem"
        text="결제하기"
        onClick={handlePayment}
      /> */}
    </div>
  );
}

export default Payment;

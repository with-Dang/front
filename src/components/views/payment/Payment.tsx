import { useLocation, useSearchParams } from "react-router-dom";
import { usePurchaseDetailQuery } from "../../../hook/purchase/usePurchaseDetailQuery";
import { calculatePrice } from "../../../utils/formatPrice";
import PaymentInfo from "./PaymentInfo";
import PaymentMethod from "./PaymentMethod";
import PaymentPrice from "./PaymentPrice";

function Payment() {
  const { pathname } = useLocation();
  const pathnameList = pathname.split("/");
  const [searchParams] = useSearchParams();
  const per = searchParams.get("per");
  const pet = searchParams.get("pet");
  const totalCnt = +(per ?? 0) + +(pet ?? 0);

  const { data: detailData } = usePurchaseDetailQuery(
    +pathnameList[pathnameList.length - 1]
  );
  const { price, discountRate } = detailData;

  // const [price, setPrice] = useState(0);
  const totalPrice = totalCnt * +calculatePrice(discountRate ?? 0, price ?? 0);

  // const handlePayment = () => {
  //   console.log("결제하기");
  // };

  return (
    <div style={{ margin: "0 auto", width: "90%", paddingTop: "2.75rem" }}>
      <div>
        <PaymentInfo
          title={detailData?.productName ?? ""}
          location={detailData?.address ?? ""}
          productPicture={detailData?.productPicture ?? ""}
          price={detailData?.price ?? 0}
        />
        <PaymentMethod price={totalPrice} />
        <PaymentPrice
          price={totalPrice}
          discountRate={detailData?.discountRate}
        />
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

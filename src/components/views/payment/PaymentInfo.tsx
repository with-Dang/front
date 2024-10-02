import Image from "../../UI/atoms/image/Image";
import Text from "../../UI/atoms/text/Text";
import PaymentInfoCount from "./PaymentInfoCount";

import { useSearchParams } from "react-router-dom";
import S from "./Payment.module.css";

const PaymentInfo = ({
  title,
  location,
  productPicture,
  price,
}: // setPrice,
{
  title: string;
  location: string;
  productPicture: string;
  price: number;
  // setPrice: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [searchParams] = useSearchParams();
  const per = searchParams.get("per");
  const pet = searchParams.get("pet");

  return (
    <div>
      <div className={S.paymentInfo__header}>
        <Image
          src={productPicture}
          width="20%"
          height="auto"
          borderRadius="7px"
          ratio={1}
        />
        <span className={S.paymentInfo__header__text}>
          <Text color="#191919" fontSize="1rem">
            {title}
          </Text>
          <Text color="#777" fontSize="0.75rem">
            {location}
          </Text>
        </span>
      </div>
      <PaymentInfoCount
        value={per ? +per : 0}
        // setValue={setPeopleNum}
        title="인원 수"
        price={+price * (per ? +per : 0)}
      />
      <PaymentInfoCount
        value={pet ? +pet : 0}
        // setValue={setDogNum}
        title="마리 수"
        price={+price * (pet ? +pet : 0)}
      />
    </div>
  );
};

export default PaymentInfo;

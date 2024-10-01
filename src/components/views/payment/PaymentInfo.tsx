import room from "@assets/png/room.png";
import { useEffect, useState } from "react";
import Image from "../../UI/atoms/image/Image";
import Text from "../../UI/atoms/text/Text";
import PaymentInfoCount from "./PaymentInfoCount";

import S from "./Payment.module.css";

const PaymentInfo = ({
  title,
  location,
  setPrice,
}: {
  title: string;
  location: string;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [peopleNum, setPeopleNum] = useState(0);
  const [dogNum, setDogNum] = useState(0);

  useEffect(() => {
    setPrice(peopleNum + dogNum);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [peopleNum, dogNum]);

  return (
    <div>
      <div className={S.paymentInfo__header}>
        <Image
          src={room}
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
      <PaymentInfoCount value={peopleNum} setValue={setPeopleNum} />
      <PaymentInfoCount value={dogNum} setValue={setDogNum} />
    </div>
  );
};

export default PaymentInfo;

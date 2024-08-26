import room from "@assets/png/room.png";
import { useState } from "react";
import Image from "../../atoms/image/Image";
import Text from "../../atoms/text/Text";
import PaymentInfoCount from "./PaymentInfoCount";

import S from "./Payment.module.css";

const PaymentInfo = ({
  title,
  location,
}: {
  title: string;
  location: string;
}) => {
  const [peopleNum, setPeopleNum] = useState(0);
  const [dogNum, setDogNum] = useState(0);
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

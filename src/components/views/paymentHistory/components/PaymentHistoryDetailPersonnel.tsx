import { IconDog, IconPerson } from "../../../../assets/png";
import { COLORS } from "../../../../styles/Color";
import Image from "../../../UI/atoms/image/Image";
import Text from "../../../UI/atoms/text/Text";
import S from "./PaymentHistoryDetailPersonnel.module.css";

type PersonnelProps = {
  person: number;
  puppies: number;
};
export const PaymentHistoryDetailPersonnel = ({
  person,
  puppies,
}: PersonnelProps) => {
  return (
    <div className={S.paymentHistoryDetailPersonnel}>
      <div>
        <Image
          src={IconPerson}
          width="1.25rem"
          height="1.25rem"
          borderRadius="0"
        />
        <Text color={COLORS.lightGray} fontSize="0.75rem" fontWeight="500">
          {person}명
        </Text>
      </div>
      <div>
        <Image
          src={IconDog}
          width="1.25rem"
          height="1.25rem"
          borderRadius="0"
        />
        <Text color={COLORS.lightGray} fontSize="0.75rem" fontWeight="500">
          {puppies}마리
        </Text>
      </div>
    </div>
  );
};

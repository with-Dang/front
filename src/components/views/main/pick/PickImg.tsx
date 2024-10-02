import room from "@assets/png/room.png";
import { COLORS } from "../../../../styles/Color";
import Image from "../../../UI/atoms/image/Image";
import Text from "../../../UI/atoms/text/Text";

import { useNavigate } from "react-router-dom";
import S from "./Pick.module.css";

const PickImg = ({
  title,
  intro,
  id,
}: {
  title: string;
  intro: string;
  id: string;
}) => {
  const navigate = useNavigate();
  const handleDetail = () => {
    navigate(`/pick/detail?detail=${id}`);
  };
  const introText = intro.length > 30 ? `${intro.slice(0, 30)}...` : intro;
  return (
    <div className={S.pickImg} onClick={handleDetail}>
      <Image
        src={room}
        width="100%"
        height="10%"
        borderRadius="7px"
        ratio={0.3}
      />
      <div className={S.pickImg__text}>
        <Text color={COLORS.white} fontSize="1.125rem">
          {title}
        </Text>
        <Text color={COLORS.white} fontSize="1rem">
          {introText}
        </Text>
      </div>
    </div>
  );
};

export default PickImg;

import room from "@assets/png/room.png";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../../../styles/Color";
import Image from "../../atoms/image/Image";
import Text from "../../atoms/text/Text";
import S from "./Pick.module.css";

interface itemprops {
  title: string;
  address?: string;
  content?: string;
  id: number;
}
function PickItem({ title, address, content, id }: itemprops) {
  const navigate = useNavigate();
  const MAX_LENGTH = 80;
  const truncatedContent = content
    ? content.length > MAX_LENGTH
      ? `${content.substring(0, MAX_LENGTH)}...`
      : content
    : "";
  const handleDetail = () => {
    navigate(`/pick/detail?detail=${id}`);
  };
  return (
    <div className={S.pickItem}>
      <Image
        src={room}
        borderRadius="0.3125rem 0.3125rem 0rem 0rem"
        width="100%"
        height="13.125rem"
      />
      <div className={S.pickItem__text}>
        <Text color={COLORS.text} fontSize="1.25rem" fontWeight="700">
          {title}
        </Text>
        <Text color="#343434" fontSize="0.875rem" fontWeight="400">
          {address}
        </Text>
        <Text color={COLORS.lightGray} fontSize="0.75rem" fontWeight="400">
          {truncatedContent}
        </Text>
        <div className={S.pickItem__more} onClick={handleDetail}>
          <Text color={COLORS.lightGray} fontSize="0.75rem" fontWeight="400">
            READ MORE
          </Text>
        </div>
      </div>
    </div>
  );
}
export default PickItem;

import { IoCheckmark } from "@react-icons/all-files/io5/IoCheckmark";
import { useNavigate, useSearchParams } from "react-router-dom";
import { COLORS } from "../../../../styles/Color";
import Text from "../text/Text";
import S from "./Check.module.css";

function Check() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const soldout = searchParams.get("soldout") === "true";

  const handleSoldout = () => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("soldout", (!soldout).toString());

    setSearchParams(newParams);
    navigate(`/purchase?${newParams.toString()}`);
  };

  return (
    <span className={S.check} onClick={handleSoldout}>
      <span className={`${S.check__input} ${soldout ? S.selected : ""}`}></span>
      {soldout && <IoCheckmark color={COLORS.white} />}
      <Text color={COLORS.lightGray} fontSize="0.75rem" fontWeight="400">
        마감 임박순
      </Text>
    </span>
  );
}

export default Check;

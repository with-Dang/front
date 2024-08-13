import { COLORS } from "../../../../styles/Color";
import RouterLabel from "../../../molecules/routerLabel/RouterLabel";
import SoldoutContent from "./SoldoutContent";

import S from "./Soldout.module.css";

const Soldout = () => {
  return (
    <div className={S.soldout}>
      <RouterLabel
        title="마감 임박 상품"
        color={COLORS.text}
        fontSize="1.25rem"
        fontWeight="700"
        url="/login"
      />
      <SoldoutContent />
    </div>
  )
}

export default Soldout
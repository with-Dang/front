import { COLORS } from "../../../../styles/Color";
import RouterLabel from "../../../molecules/routerLabel/RouterLabel";
import S from "./Pick.module.css";
import PickContent from "./PickContent";

const Pick = () => {
  return (
    <div className={S.pick}>
      <RouterLabel
        title="울산 여행지 Pick"
        color={COLORS.text}
        fontSize="1.25rem"
        fontWeight="700"
        url="/pick"
      />
      <PickContent />
    </div>
  );
};

export default Pick;

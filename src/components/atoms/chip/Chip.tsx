import { COLORS } from "../../../styles/Color";
import Text from "../text/Text";

import S from "./Chip.module.css";

type ChipProps = {
  txt: string;
  selected: boolean;
};
function Chip({ txt, selected = false }: ChipProps) {
  return (
    <span className={selected ? `${S.chip} ${S.selected}` : `${S.chip}`}>
      <Text color={selected ? COLORS.white : COLORS.gray} fontSize="0.75rem">
        {txt}
      </Text>
    </span>
  );
}

export default Chip;

import Check from "../../UI/atoms/check/Check";
import ChipBox from "../../UI/molecules/chipBox/ChipBox";
import Search from "./Search";

import S from "./Purchase.module.css";

const PurchaseHeader = () => {
  return (
    <div className={S.purchaseHeader}>
      <Search />
      <div className={S.purchaseHeader__filter}>
        <ChipBox />
        <Check />
      </div>
    </div>
  );
};

export default PurchaseHeader;

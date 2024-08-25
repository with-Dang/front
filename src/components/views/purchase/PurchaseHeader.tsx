import Check from "../../atoms/check/Check";
import ChipBox from "../../molecules/chipBox/ChipBox";
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

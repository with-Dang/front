import Header from "../../components/organisms/header/Header";
import PurchaseContent from "../../components/views/purchase/PurchaseContent";
import PurchaseHeader from "../../components/views/purchase/PurchaseHeader";

import S from "../../components/views/purchase/Purchase.module.css";

function index() {
  return (
    <div className={S.purchase}>
      <Header backIcon={true} logoIcon="logo" backUrl="/" />
      <div style={{ paddingTop: "2.75rem" }}>
        <PurchaseHeader />
        <PurchaseContent />
      </div>
    </div>
  );
}

export default index;

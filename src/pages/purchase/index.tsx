import Header from "../../components/UI/organisms/header/Header";
import S from "../../components/views/purchase/Purchase.module.css";
import PurchaseContent from "../../components/views/purchase/PurchaseContent";
import PurchaseHeader from "../../components/views/purchase/PurchaseHeader";

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

import Header from "../../../components/organisms/header/Header";
import PaymentHistoyDetail from "../../../components/views/paymentHistory/PaymentHistoryDetail";
import { COLORS } from "../../../styles/Color";

function index() {
  return (
    <div style={{ background: COLORS.main, height: "100%" }}>
      <Header logoIcon="logo" backIcon={true} />
      <PaymentHistoyDetail />
    </div>
  );
}

export default index;

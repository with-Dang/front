import Header from "../../../components/organisms/header/Header";
import PaymentHistoyDetail from "../../../components/views/paymentHistory/PaymentHistoryDetail";

function index() {
  return (
    <div style={{ background: "#469387", height: "100%" }}>
      <Header logoIcon="logo" backIcon={true} />
      <PaymentHistoyDetail />
    </div>
  );
}

export default index;

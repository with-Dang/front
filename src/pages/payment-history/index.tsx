import Header from "../../components/UI/organisms/header/Header";
import PaymentHistoy from "../../components/views/paymentHistory/PaymentHistoy";

function index() {
  return (
    <>
      <Header logoIcon="logo" backIcon={true} />
      <PaymentHistoy />
    </>
  );
}

export default index;

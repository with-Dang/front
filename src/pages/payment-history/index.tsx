import Header from "../../components/UI/organisms/header/Header";
import { Nav } from "../../components/UI/organisms/nav/Nav";
import PaymentHistoy from "../../components/views/paymentHistory/PaymentHistoy";

function index() {
  return (
    <>
      <Header logoIcon="logo" backIcon={true} />
      <PaymentHistoy />
      <Nav />
    </>
  );
}

export default index;

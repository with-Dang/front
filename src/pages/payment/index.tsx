import Header from "../../components/organisms/header/Header";
import Payment from "../../components/views/payment/Payment";

function index() {
  return (
    <>
      <Header backIcon={true} logoIcon="logo" />
      <Payment />
    </>
  );
}

export default index;

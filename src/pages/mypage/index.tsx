import Header from "../../components/organisms/header/Header";
import Mypage from "../../components/views/mypage/Mypage";

function index() {
  return (
    <>
      <Header backIcon={true} logoIcon="logo" />
      <Mypage />
    </>
  );
}

export default index;

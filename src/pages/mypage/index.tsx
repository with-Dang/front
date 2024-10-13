import Header from "../../components/UI/organisms/header/Header";
import { Nav } from "../../components/UI/organisms/nav/Nav";
import Mypage from "../../components/views/mypage/Mypage";

function index() {
  return (
    <>
      <div
        style={{
          paddingBottom: "2px",
          backgroundColor: "#469387",
          overflowY: "auto",
        }}
      >
        <Header backIcon={true} logoIcon="logo" />
      </div>
      <Mypage />
      <Nav />
    </>
  );
}

export default index;

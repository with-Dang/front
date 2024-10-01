import Header from "../../../components/UI/organisms/header/Header";
import PurDetail from "../../../components/views/purchase/detail/PurDetail";

function index() {
  return (
    <>
      <Header
        backIcon={true}
        logoIcon="logo"
        // backUrl="/purchase?category=total&soldout=false"
      />
      <div style={{ paddingTop: "2.75rem", width: "90%", margin: "0 auto" }}>
        <PurDetail />
      </div>
    </>
  );
}

export default index;

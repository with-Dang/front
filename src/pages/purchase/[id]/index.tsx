import Header from "../../../components/organisms/header/Header";

function index() {
  return (
    <div>
      <Header
        backIcon={true}
        logoIcon="logo"
        // backUrl="/purchase?category=total&soldout=false"
      />
    </div>
  );
}

export default index;

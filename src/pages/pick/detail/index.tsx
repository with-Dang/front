import Header from "../../../components/UI/organisms/header/Header";
import Nav from "../../../components/UI/organisms/nav/Nav";
import PickDetail from "../../../components/views/pick/PickDetail";

function index() {
  return (
    <>
      <Header logoIcon="logo" backIcon={true} />
      <PickDetail />
      <Nav/>
    </>
  );
}

export default index;

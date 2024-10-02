import Header from "../../components/UI/organisms/header/Header";
import Nav from "../../components/UI/organisms/nav/Nav";
import PickList from "../../components/views/pick/PickList";

function index() {
  return (
    <>
      <Header logoIcon="logo" backIcon={true} />
      <PickList />
      <Nav/>
    </>
  );
}

export default index;

import Header from "../../components/UI/organisms/header/Header";
import PickList from "../../components/views/pick/PickList";

function index() {
  return (
    <>
      <Header logoIcon="logo" backIcon={true} />
      <PickList />
    </>
  );
}

export default index;

import Header from "../components/UI/organisms/header/Header";
import Nav from "../components/UI/organisms/nav/Nav";
import AdverSlider from "../components/views/main/adverSlider/AdverSlider";
import Pick from "../components/views/main/pick/Pick";
import Soldout from "../components/views/main/soldout/Soldout";

function index() {
  return (
    <>
      <Header />
      <div style={{ paddingTop: "2.75rem" }}>
        <AdverSlider />
        <Soldout />
        <Pick />
      </div>
      <Nav/>
    </>
  );
}

export default index;

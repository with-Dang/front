import Header from "../components/organisms/header/Header";
import AdverSlider from "../components/views/main/adverSlider/AdverSlider";
import Pick from "../components/views/main/pick/Pick";
import Soldout from "../components/views/main/soldout/Soldout";

function index() {
  return (
    <>
      <Header />
      <AdverSlider />
      <Soldout />
      <Pick />
    </>
  );
}

export default index;

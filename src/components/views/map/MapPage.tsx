import { useState } from "react";
import { testStores } from "../../../pages/map/testConstant";
import { MapChipBox } from "../../UI/molecules/mapChipBox/MapChipBox";
import Header from "../../UI/organisms/header/Header";
import { CreateMap } from "./components/CreateMap";
import S from "./MapPage.module.css";

function MapPage() {
  const cc = testStores[0].center;
  const [selectIcon, setSelectIcon] = useState("");
  const handleSelectIcon = (icon: string) => {
    if (icon === selectIcon) {
      setSelectIcon("");
    } else setSelectIcon(icon);
  };
  return (
    <>
      <div className={S.map}>
        <CreateMap
          currentLocation={cc}
          mapList={testStores.filter(
            (store) => store.category === selectIcon || selectIcon === ""
          )}
        />
        <div className={S.map__top}>
          <Header backIcon={true} logoIcon="none" />
          <MapChipBox onSelect={handleSelectIcon} selectIcon={selectIcon} />
        </div>
      </div>
    </>
  );
}

export default MapPage;

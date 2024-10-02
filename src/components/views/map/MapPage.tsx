import { useState } from "react";
import { useMapItemListQuery } from "../../../hook/map/useMapItemListQuery";
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
  const { data: mapList } = useMapItemListQuery("play");
  console.log(mapList);
  if (mapList)
    return (
      <>
        <div className={S.map}>
          <CreateMap
            currentLocation={cc}
            // mapList={mapList.filter(
            //   (store) => store.category === selectIcon || selectIcon === ""
            // )}
            mapList={mapList.filter((store) => store.bsnsStts === "정상")}
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

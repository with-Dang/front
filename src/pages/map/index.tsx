import { useState } from "react";
import { MapChipBox } from "../../components/molecules/mapChipBox/MapChipBox";
import { CreateMap } from "../../components/views/map/components/CreateMap";
import { testStores } from "./testConstant";

function Index() {
  const cc = testStores[0].center;
  const [selectIcon, setSelectIcon] = useState("");
  const handleSelectIcon = (icon: string) => {
    if (icon === selectIcon) {
      setSelectIcon("");
    } else setSelectIcon(icon);
  };
  return (
    <div style={{ position: "relative" }}>
      <CreateMap
        currentLocation={cc}
        mapList={testStores.filter(
          (store) => store.category === selectIcon || selectIcon === ""
        )}
      />
      <div
        style={{
          position: "absolute",
          top: "clamp(2rem, 4rem, 4rem)",
          zIndex: "100",
          width: "100%",
        }}
      >
        <MapChipBox onSelect={handleSelectIcon} selectIcon={selectIcon} />
      </div>
    </div>
  );
}

export default Index;

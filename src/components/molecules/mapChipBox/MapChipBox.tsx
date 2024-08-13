import { useState } from "react";
import { MapChip } from "../../atoms/mapChip/MapChip";
import styles from "./MapChipBox.module.css";
import { MapChipBoxIcons } from "./constants";

export const MapChipBox = () => {
  const [selectIcon, setSelectIcon] = useState("");
  const handleSelectIcon = (icon: string) => {
    if (icon === selectIcon) {
      setSelectIcon("");
    } else setSelectIcon(icon);
  };
  return (
    <div className={styles.map__chipbox}>
      {MapChipBoxIcons.map((item) => (
        <div key={item.name}>
          <MapChip
            name={item.name}
            fill={item.fill}
            icon={item.icon}
            filter={item.filter}
            onSelect={handleSelectIcon}
            selectIcon={selectIcon}
          />
        </div>
      ))}
    </div>
  );
};

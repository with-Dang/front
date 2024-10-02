import { MapChip } from "../../atoms/mapChip/MapChip";
import styles from "./MapChipBox.module.css";
import { MapChipBoxIcons } from "./constants";

type MapChipProps = {
  selectIcon: string;
  onSelect: (icon: string) => void;
};
export const MapChipBox = ({ selectIcon, onSelect }: MapChipProps) => {
  return (
    <div className={styles.map__chipbox}>
      {MapChipBoxIcons.map((item) => (
        <div key={item.name}>
          <MapChip
            name={item.name}
            fill={item.fill}
            icon={item.icon}
            category={item.category}
            onSelect={onSelect}
            selectIcon={selectIcon}
          />
        </div>
      ))}
    </div>
  );
};

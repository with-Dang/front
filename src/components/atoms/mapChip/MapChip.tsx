import { IconType } from "@react-icons/all-files";
import Text from "../text/Text";
import styles from "./MapChip.module.css";

type MapChipBoxIconProps = {
  icon: IconType;
  name: string;
  filter: string;
  fill: string;
  selectIcon: string;
  onSelect: (icon: string) => void;
};

export const MapChip = ({
  name,
  fill,
  icon: Icon,
  filter,
  selectIcon,
  onSelect,
}: MapChipBoxIconProps) => {
  const iconFill = selectIcon === filter ? "#fff" : fill;
  const handleselect = () => {
    onSelect(filter);
  };
  return (
    <div
      className={styles.map__chip__wrapper}
      style={{ backgroundColor: selectIcon === filter ? "#469387" : "#fff" }}
      onClick={handleselect}
    >
      <div className={styles.map__chip}>
        <Icon width={100} height={100} color={iconFill} />
        {/* text 만들기 */}
        <Text color={iconFill} fontSize={"0.375rem"} fontWeight={"0.25rem"}>
          {name}
        </Text>
      </div>
    </div>
  );
};

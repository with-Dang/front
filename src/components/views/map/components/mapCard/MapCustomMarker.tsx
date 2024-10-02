import { MapMarker } from "react-kakao-maps-sdk";
import { MapItemProps } from "../../../../../types/map/type";
import { mapCategoryIcon } from "../../constants/constant";

type MapItemPropsFn = MapItemProps & {
  isClick: () => void;
};

export const MapCustomMarker = ({
  title,
  category,
  center,
  // content,
  // address,
  isClick,
}: MapItemPropsFn) => {
  const basicMarkerImg = "https://t1.daumcdn.net/mapjsapi/images/2x/marker.png";
  const iconObject =
    mapCategoryIcon.find((iconImg) => iconImg.category === category)?.img ||
    basicMarkerImg;
  return (
    <>
      <MapMarker
        title={title}
        position={{ lat: center.lat, lng: center.lng }}
        zIndex={10}
        clickable={true}
        image={{
          src: iconObject,
          size: { width: 27, height: 30 },
        }}
        onClick={isClick}
      />
    </>
  );
};

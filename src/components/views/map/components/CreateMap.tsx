import React, { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { IconCurrentLocation } from "../../../../assets/png";
import { useSwipeHandler } from "../../../../hook/map/useSwipeHandler";
import { MapItemProps } from "../../../../types/map/type";
import "./CreateMap.css";
import { MapCardItem } from "./mapCard/MapCardItem";
import { MapCustomMarker } from "./mapCard/MapCustomMarker";

interface Location {
  lat: number;
  lng: number;
}

interface MapPops {
  currentLocation: Location;
  level?: number;
  mapList: MapItemProps[];
}
export function CreateMap({ currentLocation, level = 4, mapList }: MapPops) {
  const [center, setCenter] = useState<Location>(currentLocation);
  const [isClick, setIsClick] = useState<number | null>(null);
  const handleSetCenter = (location: Location) => {
    setCenter(location);
  };
  const handlePrevNext = (delta: number) => {
    if (isClick !== null) {
      const newIndex = (isClick + delta + mapList.length) % mapList.length;
      setIsClick(newIndex);
      handleSetCenter(mapList[newIndex].center);
    } else if (mapList.length > 0) {
      setIsClick(0);
      handleSetCenter(mapList[0].center);
    }
  };

  const {
    handleTouchStart,
    handleTouchMove,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  } = useSwipeHandler(handlePrevNext);

  return (
    <Map
      center={center}
      level={level}
      style={{ width: "100%", height: "100vh" }}
      draggable={true}
      scrollwheel={true}
      isPanto={true}
      maxLevel={1} // 지도 확대 최댓값
      minLevel={7} //지도 축소 최댓값
    >
      {mapList.map((item, idx) => (
        <React.Fragment key={idx}>
          <MapCustomMarker
            title={item.title}
            center={item.center}
            category={item.category}
            isClick={() => setIsClick(isClick === idx ? null : idx)}
          />
        </React.Fragment>
      ))}
      <MapMarker
        title="현 위치"
        position={currentLocation}
        zIndex={1}
        image={{
          src: IconCurrentLocation,
          size: {
            width: 20,
            height: 20,
          },
        }}
      />
      {mapList.map((item, idx) => (
        <React.Fragment key={idx}>
          {isClick === idx && (
            <div
              className={`createMap__mapCardWrapper createMap__mapCard ${
                isClick !== null ? "slide-in" : "slide-out"
              }`}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <MapCardItem
                title={item.title}
                content={item.content}
                address={item.address}
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </Map>
  );
}

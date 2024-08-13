import React, { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { IconCurrentLocation } from "../../../../assets/png";
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
  const handleSetCenter = (location: Location) => {
    setCenter(location);
  };
  const [isClick, setIsClick] = useState<number | null>(null);
  const [startX, setStartX] = useState<number>(0);
  const handleIsClick = (idx: number) => () => {
    setIsClick(isClick === idx ? null : idx); // Clicked item toggle
  };
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].pageX);
  };
  const handleSwipe = (endX: number) => {
    const diffX = startX - endX;
    if (Math.abs(diffX) > 50) {
      handlePrevNext(diffX > 0 ? 1 : -1);
    }
  };
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleSwipe(e.touches[0].pageX);
  };
  const handlePrevNext = (delta: number) => {
    if (isClick !== null) {
      const newIndex = (isClick + delta + mapList.length) % mapList.length;
      setIsClick(newIndex);
    } else if (mapList.length > 0) {
      setIsClick(0);
    }
    handleSetCenter(mapList[isClick ?? 0].center);
  };
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
            isClick={handleIsClick(idx)}
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
              style={{
                position: "absolute",
                bottom: "2.56rem",
                zIndex: "100",
                width: "100%",
                display: "flex",
                overflowX: "auto",
              }}
              className={`map-card ${
                isClick !== null ? "slide-in" : "slide-out"
              }`}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
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

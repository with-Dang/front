import { debounce } from "lodash";
import { useCallback, useState } from "react";

export function useSwipeHandler(onSwipe: (delta: number) => void) {
  const [startX, setStartX] = useState<number>(0);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const isTouchDevice =
    navigator.maxTouchPoints || "ontouchstart" in document.documentElement; //터치 가능한 기기인지 판별 false or 1
  const handleTouchStart = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      setStartX(e.touches[0].pageX);
    },
    []
  );

  const handleSwipe = (endX: number) => {
    const diffX = startX - endX;
    if (Math.abs(diffX) > 50) {
      onSwipe(diffX > 0 ? 1 : -1);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleSwipe(e.touches[0].pageX);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setStartX(e.pageX);
    setIsMouseDown(true);
  };

  const handleMouseMove = debounce((e: React.MouseEvent<HTMLDivElement>) => {
    if (isMouseDown) {
      handleSwipe(e.pageX);
      setIsMouseDown(false);
    }
  }, 100);

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  return {
    handleTouchStart: isTouchDevice ? handleTouchStart : undefined,
    handleTouchMove: isTouchDevice ? handleTouchMove : undefined,
    //터치 X환경일 경우
    handleMouseDown: !isTouchDevice ? handleMouseDown : undefined,
    handleMouseMove: !isTouchDevice ? handleMouseMove : undefined,
    handleMouseUp: !isTouchDevice ? handleMouseUp : undefined,
  };
}

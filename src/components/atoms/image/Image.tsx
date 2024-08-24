import React from "react";

type ImageType = {
  src: string;
  width: string;
  height: string;
  borderRadius: string;
  ratio?: boolean | number;
};

function Image({ src, width, height, borderRadius, ratio = 1 }: ImageType) {
  const ImageStyle: React.CSSProperties = {
    width: width,
    height: height,
    borderRadius: borderRadius,
    objectFit: "cover",
    aspectRatio: `1 / ${ratio}`,
  };
  return <img src={src} alt="alt" style={ImageStyle} />;
}

export default Image;

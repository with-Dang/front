import React from 'react';

type ImageType = {
  src: string;
  width: string;
  height: string;
  borderRadius: string;
};

function Image({
  src,
  width,
  height,
  borderRadius
}: ImageType) {
  const ImageStyle: React.CSSProperties = {
    width: width,
    height: height,
    borderRadius: borderRadius,
    objectFit: 'cover',
    aspectRatio: "1 / 1",
  };
  return (
    <img 
      src={src}
      alt='alt'
      style={ImageStyle}
    />
  )
}

export default Image
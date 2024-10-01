import React from 'react';

type TextProps = {
  color?: string;
  fontWeight?: string;
  fontSize?: string;
  children: React.ReactNode; 
};

function Text({
  color,
  fontWeight = "500",
  fontSize = "1rem",
  children
}: TextProps) {
  const TextStyle: React.CSSProperties = {
    color: color,
    fontWeight: fontWeight,
    fontSize: fontSize,
    fontFamily: 'NPSfontBold',
  };

  return (
    <span style={TextStyle}>{children}</span>
  )
}

export default Text
import React from "react";
import Text from "../text/Text";

type IconLabelType = {
  color: string;
  backgroundColor: string;
  borderRadius: string;
  text: string;
  children: React.ReactNode;
}
function IconLabel({
  color,
  backgroundColor,
  borderRadius,
  text,
  children
}: IconLabelType) {
  const IconLabelStyle: React.CSSProperties = {
    color: color,
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
    fontFamily: 'NPSfontBold',
    padding: "0.125rem 0.5rem",
  };
  return (
    <span style={IconLabelStyle}>
      {children}
      <Text 
        color={color}
        fontSize="0.625rem"
      >{text}</Text>
    </span>
  )
}

export default IconLabel
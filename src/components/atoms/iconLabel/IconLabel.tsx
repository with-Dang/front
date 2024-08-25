import React from "react";
import Text from "../text/Text";

type IconLabelType = {
  color: string;
  backgroundColor: string;
  borderRadius: string;
  text: string;
  size?: "sm" | "lg";
  children: React.ReactNode;
};
function IconLabel({
  color,
  backgroundColor,
  borderRadius,
  text,
  size = "sm",
  children,
}: IconLabelType) {
  const IconLabelStyle: React.CSSProperties = {
    color: color,
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
    fontFamily: "NPSfontBold",
    ...(size === "sm"
      ? { padding: "0.125rem 0.5rem" }
      : { padding: "0.25rem 0.75rem" }),
    display: "flex",
    alignItems: "center",
    gap: "0.25rem",
  };
  return (
    <span style={IconLabelStyle}>
      {children}
      <Text color={color} fontSize={size === "sm" ? "0.625rem" : "0.75rem"}>
        {text}
      </Text>
    </span>
  );
}

export default IconLabel;

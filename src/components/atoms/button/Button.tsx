import { ButtonHTMLAttributes } from "react";
import Text from "../text/Text";

type ButtonType = {
  color: string;
  backgroundColor: string;
  borderRadius: string;
  fontSize: string;
  text: string;
  padding?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  color,
  backgroundColor,
  borderRadius,
  fontSize,
  text,
  padding = "1rem",
  ...props
}: ButtonType) {
  const ButtonStyle: React.CSSProperties = {
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
    padding: `${padding} 0`,
    width: "100%",
    border: "none",
  };
  return (
    <button type="button" style={ButtonStyle} {...props}>
      <Text color={color} fontSize={fontSize}>
        {text}
      </Text>
    </button>
  );
}

export default Button;

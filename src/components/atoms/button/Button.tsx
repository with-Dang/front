import Text from "../text/Text";

type ButtonType = {
  color: string;
  backgroundColor: string;
  borderRadius: string;
  fontSize: string;
  text: string;
  onClick: () => void;
};
function Button({
  color,
  backgroundColor,
  borderRadius,
  fontSize,
  text,
  onClick,
}: ButtonType) {
  const ButtonStyle: React.CSSProperties = {
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
    padding: "1rem 0",
    width: "100%",
    border: "none",
  };
  return (
    <button type="button" onClick={onClick} style={ButtonStyle}>
      <Text color={color} fontSize={fontSize}>
        {text}
      </Text>
    </button>
  );
}

export default Button;

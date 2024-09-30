type ButtonProp = {
  type?: "button" | "submit" | "reset";
  txt: string;
  color: string;
  backgroundColor: string;
  fontSize: string;
};

const Button = ({
  type = "button",
  txt = "",
  color,
  backgroundColor,
  fontSize,
}: ButtonProp) => {
  const ButtonStyle: React.CSSProperties = {
    color: color,
    backgroundColor: backgroundColor,
    fontSize: fontSize,
    fontFamily: "NPSfontBold",
    borderRadius: "20px",
    border: "none",
    width: "100%",
    padding: "1.5rem 0",
  };
  return (
    <button type={type} style={ButtonStyle}>
      {txt}
    </button>
  );
};

export default Button;

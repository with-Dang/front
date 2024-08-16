import { GoChevronRight } from "@react-icons/all-files/go/GoChevronRight";
import { useNavigate } from "react-router-dom";
import Text from "../../atoms/text/Text";

function RouterLabel({
  title,
  color,
  fontSize,
  fontWeight,
  url,
  fill = "currentcolor",
}: {
  title: string;
  color: string;
  fontSize: string;
  fontWeight: string;
  url: string;
  fill?: string;
}) {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text color={color} fontSize={fontSize} fontWeight={fontWeight}>
        {title}
      </Text>
      <span onClick={() => navigate(url)}>
        <GoChevronRight fill={fill} />
      </span>
    </div>
  );
}

export default RouterLabel;

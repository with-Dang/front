import { CSSProperties, useEffect, useState } from "react";
import { COLORS } from "../../../styles/Color";
import Text from "../../atoms/text/Text";
import S from "./Progress.module.css";

function Progress({
  currentNum,
  totalNum,
}: {
  currentNum: number;
  totalNum: number;
}) {
  const [percentage, setPercentage] = useState(0);
  const [leftPosition, setLeftPosition] = useState("0");

  useEffect(() => {
    const calculatedPercentage = (currentNum / totalNum) * 100;
    setPercentage(calculatedPercentage);

    const calculatedLeftPosition =
      calculatedPercentage - (1.4 / window.innerWidth) * 100;
    setLeftPosition(
      calculatedLeftPosition > 0 ? `${calculatedLeftPosition}%` : "0"
    );
  }, []);

  return (
    <div
      className={S.progress}
      style={
        {
          "--progress-percentage": `${percentage}%`,
        } as CSSProperties
      }
    >
      <div className={S.progress__num}>
        <span className={S.progress__num__cur} style={{ left: leftPosition }}>
          <Text fontSize="0.5625rem" color={COLORS.white}>
            {currentNum}
          </Text>
        </span>
        <span className={S.progress__num__total}>
          <Text fontSize="0.5625rem" color={COLORS.white}>
            {totalNum}
          </Text>
        </span>
      </div>
      <div className={S.progress__bar}>
        <span
          className={S.progress__bar__cur}
          style={{ width: `${percentage}%` }}
        ></span>
        <span className={S.progress__bar__total}></span>
      </div>
    </div>
  );
}

export default Progress;

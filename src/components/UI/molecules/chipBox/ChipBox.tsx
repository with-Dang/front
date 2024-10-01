import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Chip from "../../atoms/chip/Chip";
import { ChipBoxData } from "./const";

function ChipBox() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const ChipBoxStyle: React.CSSProperties = {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    gap: "0.5rem",
  };

  const handleCategory = (cate: string) => () => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("category", cate);

    setSearchParams(newParams);
    navigate(`/purchase?${newParams.toString()}`);
  };
  return (
    <div style={ChipBoxStyle}>
      {ChipBoxData?.map((m) => (
        <span key={m.id} onClick={handleCategory(m.name)}>
          <Chip txt={m.txt} selected={category === m.name} />
        </span>
      ))}
    </div>
  );
}

export default ChipBox;

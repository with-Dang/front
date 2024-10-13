import PickImg from "./PickImg";

import React from "react";
import { usePickItemListQuery } from "../../../../hook/pick/usePickItemListQuery";
import S from "./Pick.module.css";

const PickContent = () => {
  const { data: pickList } = usePickItemListQuery();
  return (
    <div className={S.pickContent}>
      {pickList?.tourItems?.map((item) => (
        <React.Fragment key={item.contentid}>
          <PickImg
            title={item.title}
            intro={item.overview}
            id={item.contentid}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default PickContent;

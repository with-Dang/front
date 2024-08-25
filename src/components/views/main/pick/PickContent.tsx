import PickImg from "./PickImg";

import React from "react";
import S from "./Pick.module.css";

const PickContent = () => {
  const PickImgData = [
    {
      id: 0,
      title: "끄티",
      intro: "울산광역시 가톨릭구 가톨릭동 111-11",
    },
    {
      id: 1,
      title: "울산 은하수",
      intro: "울산광역시 가톨릭구 가톨릭동 111-11",
    },
    {
      id: 2,
      title: "베이커리 소풍",
      intro: "울산광역시 가톨릭구 가톨릭동 111-11",
    },
  ];
  return (
    <div className={S.pickContent}>
      {PickImgData?.map((item) => (
        <React.Fragment key={item.id}>
          <PickImg title={item.title} intro={item.intro} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default PickContent;

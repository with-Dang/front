import SoldoutCard from "./SoldoutCard";

import React from "react";
import S from "./Soldout.module.css";

const SoldoutContent = () => {
  const data = [
    {
      id: 0,
      name: "비치 코코넛 카페",
      location: "울산광역시 가톨릭구 가톨릭동 111-11",
      price: "19,999",
      discount: 19,
      time: "05:33:33",
      totalPeople: 50,
      people: 48,
    },
    {
      id: 1,
      name: "비치 코코넛 카페",
      location: "울산광역시 가톨릭구 가톨릭동 111-11",
      price: "19,999",
      discount: 19,
      time: "05:33:33",
      totalPeople: 50,
      people: 48,
    },
    {
      id: 2,
      name: "비치 코코넛 카페",
      location: "울산광역시 가톨릭구 가톨릭동 111-11",
      price: "19,999",
      discount: 19,
      time: "05:33:33",
      totalPeople: 50,
      people: 48,
    },
    {
      id: 3,
      name: "비치 코코넛 카페",
      location: "울산광역시 가톨릭구 가톨릭동 111-11",
      price: "19,999",
      discount: 19,
      time: "05:33:33",
      totalPeople: 50,
      people: 48,
    },
    {
      id: 4,
      name: "비치 코코넛 카페",
      location: "울산광역시 가톨릭구 가톨릭동 111-11",
      price: "19,999",
      discount: 19,
      time: "05:33:33",
      totalPeople: 50,
      people: 48,
    },
    {
      id: 5,
      name: "비치 코코넛 카페",
      location: "울산광역시 가톨릭구 가톨릭동 111-11",
      price: "19,999",
      discount: 19,
      time: "05:33:33",
      totalPeople: 50,
      people: 48,
    },
  ];
  return (
    <div className={S.soldoutContent}>
      {data?.map((item) => (
        <React.Fragment key={item.id}>
          <SoldoutCard
            key={item.id}
            id={item.id}
            name={item.name}
            location={item.location}
            price={item.price}
            discount={item.discount}
            time={item.time}
            totalPeople={item.totalPeople}
            people={item.people}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default SoldoutContent;

import React from "react";
import PurchaseCard from "./PurchaseCard";

import { useSearchParams } from "react-router-dom";
import S from "./Purchase.module.css";

const PurchaseContent = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
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
      category: "food",
    },
    {
      id: 1,
      name: "비치 코코넛 카페",
      location: "울산광역시 가톨릭구 가톨릭동 111-11",
      price: "19,999",
      discount: 19,
      time: "05:33:33",
      totalPeople: 10,
      people: 8,
      category: "food",
    },
    {
      id: 2,
      name: "비치 코코넛 카페",
      location: "울산광역시 가톨릭구 가톨릭동 111-11",
      price: "19,999",
      discount: 19,
      time: "05:33:33",
      totalPeople: 40,
      people: 10,
      category: "food",
    },
    {
      id: 3,
      name: "비치 코코넛 카페",
      location: "울산광역시 가톨릭구 가톨릭동 111-11",
      price: "19,999",
      discount: 19,
      time: "05:33:33",
      totalPeople: 55,
      people: 2,
      category: "lod",
    },
    {
      id: 4,
      name: "비치 코코넛 카페",
      location: "울산광역시 가톨릭구 가톨릭동 111-11",
      price: "19,999",
      discount: 19,
      time: "05:33:33",
      totalPeople: 50,
      people: 50,
      category: "cafe",
    },
    {
      id: 5,
      name: "비치 코코넛 카페",
      location: "울산광역시 가톨릭구 가톨릭동 111-11",
      price: "19,999",
      discount: 19,
      time: "05:33:33",
      totalPeople: 50,
      people: 0,
      category: "cafe",
    },
  ];
  return (
    <div className={S.parchaseContent}>
      {data
        ?.filter((el) => category === "total" || el.category === category)
        ?.map((item) => (
          <React.Fragment key={item.id}>
            <PurchaseCard
              key={item.id}
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

export default PurchaseContent;

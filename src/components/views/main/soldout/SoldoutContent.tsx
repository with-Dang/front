import SoldoutCard from "./SoldoutCard";

import React from "react";
import { usePurchaseQuery } from "../../../../hook/purchase/usePurchaseQuery";
import S from "./Soldout.module.css";

const SoldoutContent = () => {
  const { data: purchaseList } = usePurchaseQuery();
  return (
    <div className={S.soldoutContent}>
      {purchaseList?.products?.map((item) => (
        <React.Fragment key={item.id}>
          <SoldoutCard
            key={item.id}
            id={item.id}
            name={item.productName}
            location={item.address}
            price={+item.price}
            discount={item.discountRate}
            time={item.closeTime}
            totalPeople={+item.closePersonnel}
            people={+item.currentPersonnel}
            productPicture={item.productPicture}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default SoldoutContent;

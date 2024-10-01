import React from "react";
import { usePurchaseQuery } from "../../../hook/purchase/usePurchaseQuery";
import S from "./Purchase.module.css";
import PurchaseCard from "./PurchaseCard";

const PurchaseContent = () => {
  // const [searchParams] = useSearchParams();
  // const category = searchParams.get("category");
  const { data: purchaseList } = usePurchaseQuery();
  console.log("🚀 ~ PurchaseContent ~ data:", purchaseList);
  return (
    <div className={S.parchaseContent}>
      {purchaseList?.products
        // ?.filter((el) => category === "total" || el.category === category)
        ?.map((item) => (
          <React.Fragment key={item.id}>
            <PurchaseCard
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

export default PurchaseContent;

import React, { useState } from "react";
import { usePurchaseQuery } from "../../../hook/purchase/usePurchaseQuery";
import Check from "../../UI/atoms/check/Check";
import ChipBox from "../../UI/molecules/chipBox/ChipBox";
import S from "./Purchase.module.css";
import PurchaseCard from "./PurchaseCard";
import Search from "./Search";

const PurchaseContent = () => {
  // const [searchParams] = useSearchParams();
  // const category = searchParams.get("category");
  const { data: purchaseList } = usePurchaseQuery();
  console.log("🚀 ~ PurchaseContent ~ data:", purchaseList);

  const [searchStr, setSearchStr] = useState("");
  return (
    <>
      <div className={S.purchaseHeader}>
        <Search value={searchStr} setValue={setSearchStr} />
        <div className={S.purchaseHeader__filter}>
          <ChipBox />
          <Check />
        </div>
      </div>
      <div className={S.parchaseContent}>
        {purchaseList?.products
          ?.filter(
            (el) =>
              el.productName.includes(searchStr) ||
              el.address.includes(searchStr)
          )
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
    </>
  );
};

export default PurchaseContent;

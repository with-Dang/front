import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { usePurchaseQuery } from "../../../hook/purchase/usePurchaseQuery";
import { ProductProps } from "../../../types/purchase/type";
import Check from "../../UI/atoms/check/Check";
import S from "./Purchase.module.css";
import PurchaseCard from "./PurchaseCard";
import Search from "./Search";

const PurchaseContent = () => {
  const { data: purchaseList } = usePurchaseQuery();

  const [searchStr, setSearchStr] = useState("");

  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    const soldout = searchParams.get("soldout") ?? "false";
    const products = purchaseList?.products?.slice();

    if (soldout === "true") {
      products?.sort((a, b) => {
        return (
          new Date(a.closeTime).getTime() - new Date(b.closeTime).getTime()
        );
      });
    } else {
      products?.sort((a, b) => +a.id - +b.id);
    }

    setFilteredProducts(products || []);
  }, [searchParams, purchaseList]);

  return (
    <>
      <div className={S.purchaseHeader}>
        <Search value={searchStr} setValue={setSearchStr} />
        <div className={S.purchaseHeader__filter}>
          {/* <ChipBox /> */}
          <div></div>
          <Check />
        </div>
      </div>
      <div className={S.parchaseContent}>
        {filteredProducts
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

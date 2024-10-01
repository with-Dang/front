import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { PurchaseQueryProps } from "../../types/purchase/type";
import { commonApis } from "../commonApi";

// 공동구매 상품 목록 조회 (/product/productsInfo)
const API_URL = "/product/productsInfo";

async function fetchPurchaseList(): Promise<PurchaseQueryProps> {
  try {
    const res: AxiosResponse<PurchaseQueryProps> = await commonApis.get(
      API_URL,
      {
        headers: { accept: `*/*` },
      }
    );
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const usePurchaseQuery = () => {
  return useQuery<PurchaseQueryProps>({
    queryKey: ["productsInfo"],
    queryFn: fetchPurchaseList,
    staleTime: 1000,
  });
};

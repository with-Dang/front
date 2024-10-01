import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ProductProps } from "../../types/purchase/type";
import { commonApis } from "../commonApi";

// 공동구매 상품 상세 조회 (/product/products/detail/{id})
const API_URL = "/product/products/detail/";

async function fetchPurchaseDetail(id: number): Promise<ProductProps> {
  try {
    const res: AxiosResponse<ProductProps> = await commonApis.get(
      API_URL + String(id),
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

export const usePurchaseDetailQuery = (id: number) => {
  return useQuery<ProductProps>({
    queryKey: ["productsInfo"],
    queryFn: () => fetchPurchaseDetail(id),
    staleTime: 1000,
  });
};

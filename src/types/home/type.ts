// 마감 임박 상품
export type SoldoutProps = {
  id: number;
  name: string;
  location?: string;
  price: string;
  discount: number;
  time: string;
  totalPeople?: number;
  people?: number;
};

// 마감 임박 상품
export type SoldoutProps = {
  id: number;
  name: string;
  location?: string;
  price: number;
  discount: number;
  time: string;
  totalPeople: number;
  people: number;
  productPicture: string;
};

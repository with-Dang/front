export type ProductProps = {
  id: number;
  productName: string;
  price: number;
  closeTime: string;
  discountRate: number;
  productPicture: string;
};

export type PurchaseQueryProps = {
  products: ProductProps[];
};

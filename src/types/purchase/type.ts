export type ProductProps = {
  id: number;
  productName: string;
  address: string;
  closePersonnel: number;
  currentPersonnel: number;
  price: number;
  closeTime: string;
  discountRate: number;
  productPicture: string;
  xcoordinate?: string;
  ycoordinate?: string;
};

export type PurchaseQueryProps = {
  products: ProductProps[];
};

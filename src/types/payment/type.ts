export type PaymentRes = {
  orderId: string;
  orderName: string;
  customerEmail: string;
  customerName: string;
  successUrl: string;
  failUrl: string;
};

export type PaymentStatusType = {
  pending: number;
  success: number;
  fail: number;
};

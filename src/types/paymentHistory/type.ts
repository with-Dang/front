type Card = {
  amount: number;
  number: string;
  cardType: string; //"체크";
  approveNo: string;
  ownerType: string; //"개인";
  issuerCode: string;
  acquirerCode: string;
  useCardPoint: false;
  acquireStatus: string; //"READY";
  interestPayer: null;
  isInterestFree: boolean;
  installmentPlanMonths: number;
};

export type PaymentHistoryItem = {
  mId: string;
  lastTransactionKey: string;
  paymentKey: string;
  orderId: string;
  orderName: string;
  taxExemptionAmount: number;
  status: string; //"DONE";
  requestedAt: string;
  approvedAt: string;
  useEscrow: boolean;
  cultureExpense: boolean;
  card: Card;
  virtualAccount: null;
  transfer: null;
  mobilePhone: null;
  giftCertificate: null;
  cashReceipt: null;
  cashReceipts: null;
  discount: null | number;
  cancels: null;
  secret: string;
  type: string; //"NORMAL";
  easyPay: {
    provider: string; //"토스페이";
    amount: number;
    discountAmount: number;
  };
  country: string; //"KR";
  failure: null;
  isPartialCancelable: true;
  receipt: {
    url: string;
  };
  checkout: {
    url: string;
  };
  currency: string; //"KRW";
  totalAmount: number;
  balanceAmount: number;
  suppliedAmount: number;
  vat: number;
  taxFreeAmount: number;
  method: string; //"간편결제";
  version: string;
  metadata: null;
};

export type SimplePaymentHistoryItem = {
  orderId: string;
  orderName: string;
  status: string; //"DONE";
  requestedAt: string;
  approvedAt: string;
  totalAmount: number;
};

export type qwe = {
  mId: string;
  vat: number;
  card: Card;
  type: string; //"NORMAL";
  method: string; //"간편결제";
  secret: string;
  status: string; //"DONE";
  cancels: null;
  country: string; //"KR";
  easyPay: {
    amount: 0;
    provider: string; //"토스페이";
    discountAmount: number;
  };
  failure: null;
  orderId: string;
  receipt: {
    url: string;
  };
  version: string;
  checkout: {
    url: string;
  };
  currency: string; //"KRW";
  discount: number | null;
  metadata: null;
  transfer: null;
  orderName: string;
  useEscrow: false;
  approvedAt: string;
  paymentKey: string;
  cashReceipt: null;
  mobilePhone: null;
  requestedAt: string;
  totalAmount: number;
  cashReceipts: null;
  balanceAmount: number;
  taxFreeAmount: number;
  cultureExpense: boolean;
  suppliedAmount: number;
  virtualAccount: null;
  giftCertificate: null;
  lastTransactionKey: string;
  taxExemptionAmount: number;
  isPartialCancelable: boolean;
};
export type PaymentHistory = {
  receipts: PaymentHistoryItem[];
};


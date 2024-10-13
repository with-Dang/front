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
  mId: string; //결제 내역의 고유 식별자
  lastTransactionKey: string;
  paymentKey: string; //결제의 고유 키.
  orderId: string; //주문의 고유 식별자.
  orderName: string; //주문의 이름.
  taxExemptionAmount: number;
  status: string; //결제 상태 "DONE"| ,...;
  requestedAt: string;
  approvedAt: string; //결제 승인 시간 (ISO 8601 형식)
  useEscrow: boolean;
  cultureExpense: boolean;
  card: Card; //카드 정보 (Card 타입).
  virtualAccount: string | null; //가상 계좌 정보 (현재는 null)
  transfer: string | null; //송금 정보
  mobilePhone: string | null; //모바일 전화 정보
  giftCertificate: string | null;
  cashReceipt: string | null; //현금 영수증 정보
  cashReceipts: string | null; // 현금 영수증 리스트
  discount: null | number; //할인 금액
  cancels: string | null; // 취소된 거래 정보
  secret: string;
  type: string; //결제 유형 "NORMAL"| ...,;
  easyPay: {
    provider: string; //"토스페이";
    amount: number; //간편 결제 금액.
    discountAmount: number; //간편 결제 할인 금액
  };
  country: string; //"KR";
  failure: string | null; //결제 실패 정보
  isPartialCancelable: boolean; // 부분 취소 가능 여부
  receipt: {
    //영수증 정보.
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
  // requestedAt: string;
  approvedAt: string;
  totalAmount: number;
  discount: number | null;
};

export type PaymentHistory = {
  receipts: PaymentHistoryItem[];
};

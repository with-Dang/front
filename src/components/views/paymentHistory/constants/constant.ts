interface PaymentHistoryItem {
  name: string;
  type: "progress" | "complete";
}

export const PAYMENTHISTORY: PaymentHistoryItem[] = [
  { name: "진행중", type: "progress" },
  { name: "완료", type: "complete" },
];

export const PAYMENTHISTORYTEST = [
  {
    data: "2024-05-27",
    itemTitle: "땡큐베리머치3",
    address: "울산광역시 가톨릭구 가톨릭동 111-13",
    discountRate: 30,
    price: 20000,
    path: "/details/1",
    cancelPath: "/cancel/1",
  },
  {
    data: "2024-05-27",
    itemTitle: "땡큐베리머치2",
    address: "울산광역시 가톨릭구 가톨릭동 111-12",
    discountRate: 20,
    price: 20000,
    path: "/details/2",
    cancelPath: "/cancel/2",
  },
  {
    data: "2024-05-27",
    itemTitle: "땡큐베리머치1",
    address: "울산광역시 가톨릭구 가톨릭동 111-11",
    discountRate: 10,
    price: 20000,
    path: "/details/3",
    cancelPath: "/cancel/3",
  },
  {
    data: "2024-05-26",
    itemTitle: "땡큐베리",
    address: "울산광역시 가톨릭구 가톨릭동 111-11",
    discountRate: 19.899,
    price: 20000,
    path: "/details/4",
    cancelPath: "/cancel/4",
  },
];

interface PaymentHistoryTest2 {
  state: "수령 전" | "공구 확정" | "공구 실패";
  data: string;
  itemImg?: string;
  itemTitle: string;
  address: string;
  discountRate: number;
  price: number;
  path: string;
  cancelPath?: string;
}
export const PAYMENTHISTORYTEST2: PaymentHistoryTest2[] = [
  {
    state: "공구 확정",
    data: "2024-05-27",
    itemTitle: "땡큐베리머치3",
    address: "울산광역시 가톨릭구 가톨릭동 111-13",
    discountRate: 30,
    price: 20000,
    path: "/details/1",
  },
  {
    state: "공구 실패",
    data: "2024-05-27",
    itemTitle: "땡큐베리머치2",
    address: "울산광역시 가톨릭구 가톨릭동 111-12",
    discountRate: 20,
    price: 20000,
    path: "/details/2",
  },
  {
    state: "공구 확정",
    data: "2024-05-27",
    itemTitle: "땡큐베리머치1",
    address: "울산광역시 가톨릭구 가톨릭동 111-11",
    discountRate: 10,
    price: 20000,
    path: "/details/3",
  },
  {
    state: "공구 실패",
    data: "2024-05-26",
    itemTitle: "땡큐베리",
    address: "울산광역시 가톨릭구 가톨릭동 111-11",
    discountRate: 19.899,
    price: 20000,
    path: "/details/4",
  },
];

// mapList type
export type MapItemProps = {
  title: string;
  category?: string; // 분류값
  center: { lat: number; lng: number };
  address?: string;
  content?: string;
};

export type PickItem = {
  contentid: string;
  contenttypeid: string;
  title: string;
  createdtime: string;
  modifiedtime: string;
  tel?: string;
  telname?: string;
  homepage: string;
  // '\u003Ca title="새창 : 대왕암공원 홈페이지로 이동" href="https://daewangam.donggu.ulsan.kr/" target="_blank"\u003Ehttps://daewangam.donggu.ulsan.kr/\u003C/a\u003E';
  booktour: string;
  firstimage: string;
  // "http://tong.visitkorea.or.kr/cms/resource/75/2712575_image2_1.jpg";
  firstimage2: string;
  // "http://tong.visitkorea.or.kr/cms/resource/75/2712575_image3_1.jpg";
  cpyrhtDivCd: "Type1" | "Type2" | "Type3" | "Type4";
  areacode: string;
  sigungucode: string;
  cat1: string;
  cat2: string;
  cat3: string;
  addr1: string;
  addr2: string;
  zipcode: string;
  mapx: string;
  mapy: string;
  mlevel: string;
  overview: string;
};
export type PickItemList = {
  tourItems: PickItem[];
};
export type PickItemDetail = PickItem & {
  petTursmInfo?: string;
  relaAcdntRiskMtr?: string;
  acmpyTypeCd: string;
  relaPosesFclty?: string;
  relaFrnshPrdlst?: string;
  etcAcmpyInfo?: string;
  relaPurcPrdlst?: string;
  acmpyPsblCpam?: string;
  relaRntlPrdlst?: string;
  acmpyNeedMtr?: string;
};

export type MapItem = {
  category: string;
  unqId: string;
  city: string;
  facility: string;
  lcnsInfo: string;
  lcnsAprDate: string;
  bsnsStts: string;
  tel: string;
  cls: string;
  zipCode: string;
  streetNameAddress: string;
  address: string;
  lat: string;
  lng: string;
  rgstDate: string;
};

export type MapItemList = MapItem[];

import HomeIcon from "../../../../assets/png/home.png";
import OffMapIcon from "../../../../assets/png/off_map.png";
import OffPaymentIcon from "../../../../assets/png/off_payment.png";
import OffProfileIcon from "../../../../assets/png/off_profile.png";
import OffPurchaseIcon from "../../../../assets/png/off_purchase.png";
import OnMapIcon from "../../../../assets/png/on_map.png";
import OnPaymentIcon from "../../../../assets/png/on_payment.png";
import OnProfileIcon from "../../../../assets/png/on_profile.png";
import OnPurchaseIcon from "../../../../assets/png/on_purchase.png";

export interface NavItem {
  path: string;
  onIcon: string;
  offIcon?: string;
  text: string;
}
export const navItems: NavItem[] = [
  {
    path: "purchase?category=total&soldout=false",
    onIcon: OnPurchaseIcon,
    offIcon: OffPurchaseIcon,
    text: "공동구매",
  },
  {
    path: "payment-history",
    onIcon: OnPaymentIcon,
    offIcon: OffPaymentIcon,
    text: "결제내역",
  },
  { path: "", onIcon: HomeIcon, offIcon: HomeIcon, text: "홈" },
  { path: "map", onIcon: OnMapIcon, offIcon: OffMapIcon, text: "지도" },
  {
    path: "mypage",
    onIcon: OnProfileIcon,
    offIcon: OffProfileIcon,
    text: "마이페이지",
  },
];

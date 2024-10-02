import { AiOutlineShopping } from "@react-icons/all-files/ai/AiOutlineShopping";
import { BsCardChecklist } from "@react-icons/all-files/bs/BsCardChecklist";
import { FaRegMap } from "@react-icons/all-files/fa/FaRegMap";
import { IoMdHome } from "@react-icons/all-files/io/IoMdHome";
import { MdPersonOutline } from "@react-icons/all-files/md/MdPersonOutline";
export const NavIcons = [
  {
    name: "공동구매",
    icon: AiOutlineShopping,
    route: "purchase",
  },
  {
    name: "결제내역",
    icon: BsCardChecklist,
    route: "payment-history",
  },
  { name: "", icon: IoMdHome, route: "" },
  {
    name: "지도",
    icon: FaRegMap,
    route: "map",
  },
  {
    name: "마이페이지",
    icon: MdPersonOutline,
    route: "mypage",
  },
];

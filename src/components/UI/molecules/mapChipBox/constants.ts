import { FaBed } from "@react-icons/all-files/fa/FaBed"; //숙소
import { MdLocalHospital } from "@react-icons/all-files/md/MdLocalHospital"; //병원
import { MdRestaurant } from "@react-icons/all-files/md/MdRestaurant";
import { MdShoppingBasket } from "@react-icons/all-files/md/MdShoppingBasket";
import { Pill, Scissors } from "../../../../assets/icons";

export const MapChipBoxIcons = [
  {
    name: "병원",
    icon: MdLocalHospital,
    category: "hospital",
    fill: "#469387",
  },
  { name: "약국", icon: Pill, category: "pharmacy", fill: "#EFC65D" },
  { name: "숙소", icon: FaBed, category: "accommodation", fill: "#E69739" },
  {
    name: "음식점",
    icon: MdRestaurant,
    category: "restaurant",
    fill: "#469387",
  },
  { name: "용품", icon: MdShoppingBasket, category: "shop", fill: "#EFC65D" },
  { name: "미용", icon: Scissors, category: "beauty", fill: "#E69739" },
];

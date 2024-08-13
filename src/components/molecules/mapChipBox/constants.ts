import { FaBed } from "@react-icons/all-files/fa/FaBed"; //숙소
import { MdLocalHospital } from "@react-icons/all-files/md/MdLocalHospital"; //병원
import { MdRestaurant } from "@react-icons/all-files/md/MdRestaurant";
import { MdShoppingBasket } from "@react-icons/all-files/md/MdShoppingBasket";
import { Pill, Scissors } from "../../../assets/icons";

export const MapChipBoxIcons = [
  { name: "병원", icon: MdLocalHospital, filter: "hospital", fill: "#469387" },
  { name: "약국", icon: Pill, filter: "pharmacy", fill: "#EFC65D" },
  { name: "숙소", icon: FaBed, filter: "accommodation", fill: "#E69739" },
  {
    name: "음식점",
    icon: MdRestaurant,
    filter: "restaurant",
    fill: "#469387",
  },
  { name: "용품", icon: MdShoppingBasket, filter: "shop", fill: "#EFC65D" },
  { name: "미용", icon: Scissors, filter: "beauty", fill: "#E69739" },
];

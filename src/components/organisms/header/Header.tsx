// import Logo from "@assets/svg/logo.svg";
import { GoChevronLeft } from "@react-icons/all-files/go/GoChevronLeft";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../App.css";
import { logo, mainLogo } from "../../../assets/png";
import S from "./Header.module.css";

type HeaderProps = {
  backIcon?: boolean;
  logoIcon?: "mainLogo" | "logo" | "none";
  backgroundColor?: string;
};
const Header: React.FC<HeaderProps> = ({
  backIcon = false,
  logoIcon = "mainLogo",
  backgroundColor = "transparent",
}) => {
  const navigate = useNavigate();
  return (
    <header className="top_header" style={{ backgroundColor: backgroundColor }}>
      <div className={`${S.top_header_page} top_header_page`}>
        {backIcon && (
          <span onClick={() => navigate(-1)}>
            <GoChevronLeft />
          </span>
        )}

        {logoIcon !== "none" && (
          <img
            src={logoIcon === "mainLogo" ? mainLogo : logo}
            alt={logoIcon}
            // className={logoIcon}
            onClick={() => navigate("/")}
          />
        )}
      </div>
    </header>
  );
};

export default Header;

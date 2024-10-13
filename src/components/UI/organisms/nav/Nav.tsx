import { IconType } from "@react-icons/all-files";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Text from "../../atoms/text/Text";
import { NavIcons } from "./constant";
import styles from "./Nav.module.css";
type NavItemProps = {
  icon: IconType;
  name: string;
  route: string;
};
const Item = ({ icon: Icon, name, route }: NavItemProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedPath =
    location.pathname === ""
      ? location.pathname
      : location.pathname.split("/").slice(1, 3).join("/");
  console.log(selectedPath);
  const iconFill = selectedPath === route.split("?")[0] ? "#000" : "#999";
  const handleRoute = () => {
    navigate(`/${route}`);
  };
  return (
    <div
      className={`${styles.nav__icon__wrapper} ${
        name === "" ? styles.nav__icon__home : ""
      }`}
    >
      <div className={styles.nav__icon} onClick={handleRoute}>
        <Icon
          width={100}
          height={100}
          color={name === "" ? "#fff" : iconFill}
        />
        {name && (
          <Text color={iconFill} fontSize={"0.375rem"} fontWeight={"0.25rem"}>
            {name}
          </Text>
        )}
      </div>
    </div>
  );
};

const Nav = () => {
  return (
    <div className={styles.nav__wrapper}>
      {NavIcons.map((item) => (
        <React.Fragment key={item.name}>
          <Item icon={item.icon} name={item.name} route={item.route} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Nav;

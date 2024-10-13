"use client";
import { useLocation, useNavigate } from "react-router-dom";
import Text from "../../atoms/text/Text";
import { navItems, type NavItem } from "./Nav.const";
import S from "./Nav.module.css";

export interface NavProps {
  title?: string;
  maxCnt?: number;
  type?: string;
  subtitle?: string;
  essential?: boolean;
}
export function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const selectedPath =
    pathname === "/" ? pathname : pathname.split("/").slice(1, 3).join("/");
  const handleNavigate = (path: string) => {
    navigate(`/${path}`);
  };
  return (
    <div className={S.Nav__wrapper}>
      {navItems.map(({ path, onIcon, offIcon, text }: NavItem) => {
        const [lastPathSegment] = path.split("/").slice(-1);
        const isIcon = lastPathSegment.startsWith(selectedPath);

        return (
          <div
            key={path}
            className={S.Nav__Icon}
            onClick={() => handleNavigate(path)}
          >
            <img
              src={isIcon ? onIcon : offIcon}
              alt={text}
              className={text === "홈" ? S.Nav__Icon__home : S.Nav__Icon__img}
            />
            {text !== "홈" && (
              <Text
                color={isIcon ? "#000" : "#989898"}
                fontSize="0.6875rem"
                fontWeight="600"
              >
                {text}
              </Text>
            )}
          </div>
        );
      })}
    </div>
  );
}

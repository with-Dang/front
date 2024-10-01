import { HTMLAttributes, PropsWithChildren } from "react";
import S from "./BottomSheet.module.css";

type Props = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

const BottomSheetOverlay = ({ children, ...props }: Props) => {
  return (
    <div className={S.bottomSheet__overlay} {...props}>
      {children}
    </div>
  );
};

export default BottomSheetOverlay;

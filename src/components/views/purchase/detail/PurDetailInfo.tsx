import Image from "../../../UI/atoms/image/Image";
import Text from "../../../UI/atoms/text/Text";

import S from "./PurDetail.module.css";

const PurDetailInfo = ({
  productDetailPicture,
}: {
  productDetailPicture: string;
}) => {
  return (
    <div className={S.purDetail__info}>
      <Text>상세 정보</Text>
      <div className={S.purDetail__line}></div>
      <Image
        src={productDetailPicture}
        width="100%"
        height="auto"
        borderRadius="7px"
      />
    </div>
  );
};

export default PurDetailInfo;

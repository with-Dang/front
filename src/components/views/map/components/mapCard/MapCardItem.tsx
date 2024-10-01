import room from "@assets/png/room.png";
import React from "react";
import Image from "../../../../UI/atoms/image/Image";
import Text from "../../../../UI/atoms/text/Text";
import styles from "./MapCard.module.css";

type MapCardItemProps = {
  title: string;
  address?: string;
  content?: string;
  imgSrc?: string;
};

export const MapCardItem = ({
  title,
  address,
  content,
  imgSrc = room, // 기본값 설정
}: MapCardItemProps) => {
  return (
    <div className={styles.mapCard__item}>
      <div className={styles.mapCard__item__img}>
        <Image src={imgSrc} width="100%" height="100%" borderRadius="1.25rem" />
      </div>
      <div className={styles.mapCard__item__content}>
        <Text color="#191919" fontSize="1rem" fontWeight="400">
          {title}
        </Text>
        <Text color="#191919" fontSize="0.625rem" fontWeight="400">
          {address}
        </Text>
        <div>
          {content?.split("\n").map((text, index) => (
            <React.Fragment key={index}>
              <Text color="#666" fontSize="0.5rem" fontWeight="700">
                {text}
              </Text>
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

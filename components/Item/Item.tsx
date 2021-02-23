import React, { useState } from "react";

import styles from "./Item.module.scss";

interface ItemProps {
  itemType: ItemTypes;
}

const Item: React.FC<ItemProps> = ({ itemType }) => {
  const [pressed, setPressed] = useState(false);

  const imgSrc = `/images/icon-${itemType}.svg`;
  const background = `var(--gradient-${itemType})`;

  return (
    <div
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      className={styles.container}
    >
      <div
        style={{
          background,
          boxShadow: pressed ? "none" : "",
          paddingBottom: pressed ? "25%" : "30%",
        }}
        className={styles.background}
      ></div>
      <div className={styles.imageWrapper}>
        <div className={styles.square}>
          <img className={styles.image} src={imgSrc} />
        </div>
      </div>
    </div>
  );
};

export default Item;

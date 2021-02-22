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
      onPointerUp={() => setPressed(false)}
      onPointerDown={() => setPressed(true)}
      className={styles.container}
    >
      <div
        style={{
          background,
          boxShadow: pressed ? "none" : "",
          paddingBottom: pressed ? "25%" : "30%",
        }}
        className={styles.outerBackground}
      >
        <div className={styles.innerBackground}></div>
      </div>
      <img className={styles.image} src={imgSrc} />
    </div>
  );
};

export default Item;

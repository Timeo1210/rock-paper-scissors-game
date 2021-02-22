import React from "react";

import styles from "./ItemPicker.module.scss";

import Item from "@/components/Item";

const ItemPicker: React.FC<{}> = () => {
  return (
    <div className={styles.container}>
      <img className={styles.bgImg} src="/images/bg-triangle.svg" />
      <div className={styles.wrapper}>
        <div className={styles.wrapperUp}>
          <Item itemType="paper" />
          <Item itemType="scissors" />
        </div>
        <Item itemType="rock" />
      </div>
    </div>
  );
};

export default ItemPicker;

import React from "react";

import styles from "./ItemPicker.module.scss";

import Item from "@/components/Item";

const ItemPicker: React.FC<{}> = () => {
  return (
    <div className={styles.container}>
      <img className={styles.bgImg} src="/images/bg-triangle.svg" />
      <div className={styles.wrapper}>
        <Item itemType="paper" />
        <Item itemType="rock" />
        <Item itemType="scissors" />
      </div>
    </div>
  );
};

export default ItemPicker;

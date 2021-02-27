import React from "react";

import styles from "./ShowItems.module.scss";

import Item from "@/components/Item";

interface ShowItemsProps {
  userItem: ItemTypes;
  houseItem: ItemTypes;
}

const ShowItems: React.FC<ShowItemsProps> = ({ userItem, houseItem }) => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Item itemType={userItem} win={true} />
        <span>YOU PICKED</span>
      </div>
      <div className={styles.item}>
        <Item itemType={houseItem} />
        <span>THE HOUSE PICKED</span>
      </div>
    </div>
  );
};

export default ShowItems;

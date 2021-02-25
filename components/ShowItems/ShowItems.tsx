import React from "react";

import styles from "./ShowItems.module.scss";

import Item from "@/components/Item";

interface ShowItemsProps {
  userItem: ItemTypes;
}

const ShowItems: React.FC<ShowItemsProps> = ({ userItem }) => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Item itemType={userItem} />
        <span>YOU PICKED</span>
      </div>
      <div className={styles.item}>
        <Item itemType={null} />
        <span>THE HOUSE PICKED</span>
      </div>
    </div>
  );
};

export default ShowItems;

import React from "react";

import styles from "./ShowItems.module.scss";

import Item from "@/components/Item";

interface ShowItemsProps {
  userItem: ItemTypes;
  houseItem: ItemTypes;
  userWin: boolean;
}

const ShowItems: React.FC<ShowItemsProps> = ({
  userItem,
  houseItem,
  userWin,
  children,
}) => (
  <div
    className={styles.container}
    style={{ maxWidth: children ? 1200 : null }}
  >
    <div className={styles.item}>
      <Item itemType={userItem} win={userWin} />
      <span>YOU PICKED</span>
    </div>
    {children}
    <div className={styles.item}>
      <Item itemType={houseItem} win={userWin !== null && !userWin} />
      <span>THE HOUSE PICKED</span>
    </div>
  </div>
);

export default ShowItems;

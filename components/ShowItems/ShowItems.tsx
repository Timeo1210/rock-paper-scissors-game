import React from "react";

import styles from "./ShowItems.module.scss";

import Item from "@/components/Item";

interface ShowItemsProps {
  userItem: ItemTypes;
  houseItem: ItemTypes;
  whoWin: WhoWin;
}

const ShowItems: React.FC<ShowItemsProps> = ({
  userItem,
  houseItem,
  whoWin,
  children,
}) => (
  <div className={styles.container}>
    <div className={styles.item}>
      <Item itemType={userItem} win={whoWin === "user"} />
      <span>YOU PICKED</span>
    </div>
    {children}
    <div className={styles.item}>
      <Item itemType={houseItem} win={whoWin === "house"} />
      <span>THE HOUSE PICKED</span>
    </div>
  </div>
);

export default ShowItems;

import React from "react";

import styles from "./ItemPicker.module.scss";
import withAction from "@/HOC/withAction";

import Item from "@/components/Item";

interface ItemPickerProps {
  setUserItem: React.Dispatch<React.SetStateAction<ItemTypes>>;
}

const ItemPicker: React.FC<ItemPickerProps> = ({ setUserItem }) => {
  const handleAction = (itemType: ItemTypes) => {
    setUserItem(itemType);
  };
  const ItemWithAction = withAction(Item, handleAction);

  return (
    <div className={styles.container}>
      <img className={styles.bgImg} src="/images/bg-triangle.svg" />
      <div className={styles.wrapper}>
        <ItemWithAction itemType="paper" />
        <ItemWithAction itemType="rock" />
        <ItemWithAction itemType="scissors" />
      </div>
    </div>
  );
};

export default ItemPicker;

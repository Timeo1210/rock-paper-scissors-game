import React from "react";

import styles from "./ItemPicker.module.scss";
import withActionAndButton from "@/utils/HOC/withActionAndButton";

import Item from "@/components/Item";

interface ItemPickerProps {
  setUserItem: React.Dispatch<React.SetStateAction<ItemTypes>>;
}

const ItemPicker: React.FC<ItemPickerProps> = ({ setUserItem }) => {
  const handleAction = (itemType: ItemTypes) => {
    setUserItem(itemType);
  };
  const ItemWithActionAndButton = withActionAndButton(Item, handleAction);

  return (
    <div className={styles.container}>
      <img
        className={styles.bgImg}
        src="/images/bg-triangle.svg"
        alt="background triangle"
      />
      <div className={styles.wrapper}>
        <ItemWithActionAndButton itemType="paper" />
        <ItemWithActionAndButton itemType="rock" />
        <ItemWithActionAndButton itemType="scissors" />
      </div>
    </div>
  );
};

export default ItemPicker;

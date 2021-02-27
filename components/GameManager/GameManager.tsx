import ItemPicker from "@/components/ItemPicker";
import ShowItems from "@/components/ShowItems";
import ItemPickerTransition from "@/Transitions/ItemPickerTransition";
import ShowItemsTransition from "@/Transitions/ShowItemsTransition";
import React, { useEffect, useState } from "react";

type ShowComponentValues = "ItemPicker" | "ShowItems";

const AvailableItems: ItemTypes[] = ["paper", "rock", "scissors"];
const generateRandomItem = () => {
  const index = Math.floor(Math.random() * AvailableItems.length);
  return AvailableItems[index];
};

const GameManager: React.FC<{}> = () => {
  const [showComponent, setShowComponent] = useState<ShowComponentValues>(
    "ItemPicker"
  );
  const [userItem, setUserItem] = useState<ItemTypes | null>(null);
  const [houseItem, setHouseItem] = useState<ItemTypes | null>(null);

  const handleItemPicked = () => {
    setShowComponent("ShowItems");
    setTimeout(() => {
      setHouseItem(generateRandomItem());
    }, 1000);
  };

  switch (showComponent) {
    case "ShowItems":
      return (
        <ShowItemsTransition inProps={!!userItem}>
          <ShowItems userItem={userItem} houseItem={houseItem} />
        </ShowItemsTransition>
      );

    default:
      return (
        <ItemPickerTransition inProps={!userItem} onExited={handleItemPicked}>
          <ItemPicker setUserItem={setUserItem} />
        </ItemPickerTransition>
      );
  }
};

export default GameManager;

import ItemPicker from "@/components/ItemPicker";
import ShowItems from "@/components/ShowItems";
import ItemPickerTransition from "@/Transitions/ItemPickerTransition";
import ShowItemsTransition from "@/Transitions/ShowItemsTransition";
import getWinner from "@/utils/getWinner";
import React, { useEffect, useState } from "react";

type ShowComponentValues = "ItemPicker" | "ShowItems";

const AvailableItems: ItemTypes[] = ["paper", "rock", "scissors"];
const generateRandomItem = () => {
  const index = Math.floor(Math.random() * AvailableItems.length);
  return AvailableItems[index];
};

const GameManager: React.FC = () => {
  const [showComponent, setShowComponent] = useState<ShowComponentValues>(
    "ItemPicker"
  );
  const [userItem, setUserItem] = useState<ItemTypes | null>(null);
  const [houseItem, setHouseItem] = useState<ItemTypes | null>(null);
  const [whoWin, setWhoWin] = useState<WhoWin | null>(null);

  const handleItemPicked = () => {
    setShowComponent("ShowItems");
    setTimeout(() => {
      setHouseItem(generateRandomItem());
    }, 1000);
  };

  useEffect(() => {
    if (houseItem) {
      const winner = getWinner(userItem, houseItem);
      setTimeout(() => {
        setWhoWin(winner);
      }, 750);
    }
  }, [houseItem, userItem]);

  switch (showComponent) {
    case "ShowItems":
      return (
        <ShowItemsTransition inProps={!!userItem}>
          <ShowItems
            userItem={userItem}
            houseItem={houseItem}
            whoWin={whoWin}
          />
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

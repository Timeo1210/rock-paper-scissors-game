import React, { useEffect, useMemo, useState } from "react";

import ItemPicker from "@/components/ItemPicker";
import ShowItems from "@/components/ShowItems";
import ShowGameState from "@/components/ShowGameState";

import ItemPickerTransition from "@/Transitions/ItemPickerTransition";
import ShowItemsTransition from "@/Transitions/ShowItemsTransition";

import getWinner from "@/utils/getWinner";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import withDefaultProps from "@/HOC/withDefaultProps";

type ShowComponentValues = "ItemPicker" | "ShowItems";

const AvailableItems: ItemTypes[] = ["paper", "rock", "scissors"];
const generateRandomItem = () => {
  const index = Math.floor(Math.random() * AvailableItems.length);
  return AvailableItems[index];
};

const GameManager: React.FC = () => {
  const { width } = useWindowDimensions();

  const [showComponent, setShowComponent] = useState<ShowComponentValues>(
    "ItemPicker"
  );
  const [userItem, setUserItem] = useState<ItemTypes | null>(null);
  const [houseItem, setHouseItem] = useState<ItemTypes | null>(null);
  const [userWin, setUserWin] = useState<boolean | null>(null);

  const handleItemPicked = () => {
    setShowComponent("ShowItems");
    setTimeout(() => {
      setHouseItem(generateRandomItem());
    }, 1000);
  };
  const handleReplayClick = () => {
    setHouseItem(null);
    setUserWin(null);
    setUserItem(null);
    setShowComponent("ItemPicker");
  };

  useEffect(() => {
    if (houseItem) {
      const winner = getWinner(userItem, houseItem);
      setTimeout(() => {
        setUserWin(winner === "user");
      }, 750);
    }
  }, [houseItem, userItem]);

  // GENERATE ShowGameState Component
  const ShowGameStateWithDefaultProps = useMemo(
    () =>
      withDefaultProps(ShowGameState, {
        userWin,
        onReplayClick: handleReplayClick,
      }),
    [userWin]
  );

  switch (showComponent) {
    case "ShowItems":
      return (
        <>
          <ShowItemsTransition inProps={!!userItem}>
            <ShowItems
              userItem={userItem}
              houseItem={houseItem}
              userWin={userWin}
            >
              {userWin !== null && width > 750 && (
                <ShowGameStateWithDefaultProps isInShowItems />
              )}
            </ShowItems>
          </ShowItemsTransition>
          {userWin !== null && width <= 750 && (
            <ShowGameStateWithDefaultProps />
          )}
        </>
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

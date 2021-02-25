import React, { useReducer, useState } from "react";

import ItemPicker from "@/components/ItemPicker";
import ShowItems from "@/components/ShowItems";

import ItemPickerTransition from "@/Transitions/ItemPickerTransition";
import ShowItemsTransition from "@/Transitions/ShowItemsTransition";

type ShowComponentValues = "ItemPicker" | "ShowItems";

const GameManager: React.FC<{}> = ({ children }) => {
  const [showComponent, setShowComponent] = useState<ShowComponentValues>(
    "ItemPicker"
  );
  const [userItem, setUserItem] = useState<ItemTypes | null>(null);

  switch (showComponent) {
    case "ShowItems":
      return (
        <ShowItemsTransition inProps={!!userItem}>
          <ShowItems userItem={userItem} />
        </ShowItemsTransition>
      );

    default:
      return (
        <ItemPickerTransition
          inProps={!userItem}
          onExited={() => setShowComponent("ShowItems")}
        >
          <ItemPicker setUserItem={setUserItem} />
        </ItemPickerTransition>
      );
  }
};

export default GameManager;

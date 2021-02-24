import React, { useState } from "react";

import ItemPicker from "@/components/ItemPicker";

import ItemPickerTransition from "@/Transitions/ItemPickerTransition";

const GameManager: React.FC<{}> = ({ children }) => {
  const [userItem, setUserItem] = useState<ItemTypes | null>(null);

  return (
    <>
      <ItemPickerTransition inProps={!userItem}>
        <ItemPicker setUserItem={setUserItem} />
      </ItemPickerTransition>
    </>
  );
};

export default GameManager;

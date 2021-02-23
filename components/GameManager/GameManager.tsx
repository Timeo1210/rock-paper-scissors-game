import React, { useState } from "react";

import ItemPicker from "@/components/ItemPicker";

const GameManager: React.FC<{}> = ({ children }) => {
  const [userItem, setUserItem] = useState<ItemTypes | null>(null);

  return <>{!userItem && <ItemPicker setUserItem={setUserItem} />}</>;
};

export default GameManager;

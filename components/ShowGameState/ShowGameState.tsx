import React from "react";

import styles from "./ShowGameState.module.scss";

import ReplayButton from "@/components/ReplayButton";

interface ShowGameStateProps {
  userWin: boolean;
  isInShowItems?: boolean;
}

const ShowGameState: React.FC<ShowGameStateProps> = ({
  userWin,
  isInShowItems = false,
}) => {
  const text = userWin ? "You Win" : "You Lose";
  return (
    <div
      className={styles.container}
      style={{ height: isInShowItems ? "100%" : "auto" }}
    >
      <span className={styles.text}>{text}</span>
      <ReplayButton />
    </div>
  );
};

export default ShowGameState;

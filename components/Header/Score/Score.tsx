import React, { useContext } from "react";

import styles from "./Score.module.scss";

import { ScoreContext } from "@/Contexts/ScoreContext";

const Score: React.FC<{}> = () => {
  const scoreContext = useContext(ScoreContext);

  return (
    <div className={styles.container}>
      <span className={styles.label}>SCORE</span>
      <span className={styles.text}>{scoreContext.score}</span>
    </div>
  );
};

export default Score;

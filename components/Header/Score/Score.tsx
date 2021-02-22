import React from "react";

import styles from "./Score.module.scss";

const Score: React.FC<{}> = () => {
  return (
    <div className={styles.container}>
      <span className={styles.label}>SCORE</span>
      <span className={styles.text}>12</span>
    </div>
  );
};

export default Score;

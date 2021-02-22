import React from "react";

import styles from "./Header.module.scss";

import Score from "./Score";

const Header: React.FC<{}> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <span>Rock</span>
        <span>Paper</span>
        <span>Scissors</span>
      </div>
      <Score />
    </div>
  );
};

export default Header;

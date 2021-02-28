import React from "react";

import styles from "./RulesButton.module.scss";

const RulesButton: React.FC<{}> = () => (
  <button type="button" className={styles.btn}>
    <span className={styles.btnLabel}>Rules</span>
  </button>
);

export default RulesButton;

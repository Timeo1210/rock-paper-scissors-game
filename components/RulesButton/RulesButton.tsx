import Reect from "react";

import styles from "./RulesButton.module.scss";

const RulesButton: React.FC<{}> = () => {
  return (
    <button className={styles.btn}>
      <span className={styles.btnLabel}>Rules</span>
    </button>
  );
};

export default RulesButton;

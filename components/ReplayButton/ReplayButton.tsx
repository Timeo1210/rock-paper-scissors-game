import React from "react";

import styles from "./ReplayButton.module.scss";

interface ReplayButtonProps {
  onClick?: () => void;
}

const ReplayButton: React.FC<ReplayButtonProps> = ({ onClick }) => (
  <button className={styles.button} onClick={onClick} type="button">
    <span className={styles.text}>Play Again</span>
  </button>
);

export default ReplayButton;

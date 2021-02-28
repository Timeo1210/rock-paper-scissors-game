import React from "react";

import styles from "./CloseButton.module.scss";

interface CloseButtonProps {
  className?: string;
  onClick?: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick, className }) => (
  <button
    onClick={onClick}
    className={`${styles.button} ${className}`}
    type="button"
  >
    <img src="/images/icon-close.svg" alt="close" />
  </button>
);

export default CloseButton;

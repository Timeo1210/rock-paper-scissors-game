import React, { useMemo } from "react";

import styles from "./RulesPopper.module.scss";

import CloseButton from "@/components/CloseButton";

import withDefaultProps from "@/HOC/withDefaultProps";

interface RulesPopperProps {
  closePopper?: () => void;
}

const RulesPopper: React.FC<RulesPopperProps> = ({ closePopper }) => {
  const CloseButtonWithClick = useMemo(
    () => withDefaultProps(CloseButton, { onClick: closePopper }),
    [closePopper]
  );
  return (
    <section className={styles.container}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>Rules</h3>
        <CloseButtonWithClick className={styles.innerButton} />
      </div>
      <img src="/images/image-rules.svg" alt="rules" />
      <CloseButtonWithClick className={styles.outerButton} />
    </section>
  );
};

export default RulesPopper;

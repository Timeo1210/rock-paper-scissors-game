import React, { useState } from "react";

import styles from "./RulesButton.module.scss";

import RulesPopper from "./RulesPopper";

const RulesButton: React.FC<{}> = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={styles.btn}
      >
        <span className={styles.btnLabel}>Rules</span>
      </button>
      {open && <RulesPopper closePopper={() => setOpen(false)} />}
    </>
  );
};

export default RulesButton;

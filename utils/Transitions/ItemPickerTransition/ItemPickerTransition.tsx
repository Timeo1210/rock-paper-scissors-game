import React from "react";
import { CSSTransition } from "react-transition-group";

import styles from "./ItemPickerTransition.module.scss";

const ItemPickerTransition: React.FC<TransitionProps> = ({
  children,
  inProps,
  onExited,
}) => (
  <CSSTransition
    unmountOnExit
    in={inProps}
    timeout={{ appear: 0, enter: 0, exit: 300 }}
    classNames={{
      exitActive: styles.ItemPickerExit,
    }}
    onExited={onExited}
  >
    {children}
  </CSSTransition>
);

export default ItemPickerTransition;

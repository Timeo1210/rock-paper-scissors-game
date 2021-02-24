import React from "react";
import { CSSTransition } from "react-transition-group";

import styles from "./ItemPickerTransition.module.scss";

interface ItemPickerTransitionProps {
  inProps: boolean;
}

const ItemPickerTransition: React.FC<ItemPickerTransitionProps> = ({
  children,
  inProps,
}) => {
  return (
    <CSSTransition
      unmountOnExit
      in={inProps}
      timeout={{ appear: 0, enter: 0, exit: 300 }}
      classNames={{
        exitActive: styles.ItemPickerExit,
      }}
    >
      {children}
    </CSSTransition>
  );
};

export default ItemPickerTransition;

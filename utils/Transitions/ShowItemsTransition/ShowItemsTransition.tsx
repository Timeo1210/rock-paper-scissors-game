import React from "react";
import { CSSTransition } from "react-transition-group";

// import styles from "./ShowItemsTransition.module.scss";

const ShowItemsTransition: React.FC<TransitionProps> = ({
  children,
  inProps,
  onExited,
}) => (
  <CSSTransition
    unmountOnExit
    in={inProps}
    timeout={{ appear: 0, enter: 0, exit: 0 }}
    onExited={onExited}
  >
    {children}
  </CSSTransition>
);

export default ShowItemsTransition;

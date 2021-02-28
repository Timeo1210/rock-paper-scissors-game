import React, { useEffect, useRef, useState } from "react";

import styles from "./Item.module.scss";

interface ItemProps {
  itemType: ItemTypes | null;
  win?: boolean;
  isButton?: boolean;
  handleAction?: (itemType: ItemTypes) => void;
}

const Item: React.FC<ItemProps> = ({
  itemType,
  win,
  isButton = false,
  handleAction,
}) => {
  const containerRef = useRef(null);

  const [pressed, setPressed] = useState(false);

  const imgSrc = `/images/icon-${itemType}.svg`;
  const outerBackground = `var(--gradient-${itemType})`;
  const innerBackground = itemType ? "#f1f1f1" : "rgba(22, 25, 33, 0.38)";

  useEffect(() => {
    if (itemType && isButton) {
      const handlePointerUp = (e) => {
        e.preventDefault();
        setPressed(false);
      };
      const handlePointerDown = (e) => {
        e.preventDefault();
        if (containerRef.current.contains(e.target)) {
          setPressed(true);
        }
      };

      window.addEventListener("mouseup", handlePointerUp);
      window.addEventListener("mousedown", handlePointerDown);

      return () => {
        window.removeEventListener("mouseup", handlePointerUp);
        window.removeEventListener("mousedown", handlePointerDown);
      };
    }
    return () => {};
  }, [itemType, isButton]);

  return (
    <div
      ref={containerRef}
      className={styles.container}
      role="button"
      tabIndex={isButton ? 0 : null}
      onClick={handleAction ? () => handleAction(itemType) : null}
      style={{ cursor: isButton ? "pointer" : "default" }}
    >
      {itemType && (
        <div
          className={`${styles.background} ${win ? styles.glowing : null}`}
          style={{
            background: outerBackground,
            boxShadow: pressed ? "none" : "",
            paddingBottom: pressed ? "25%" : "30%",
          }}
        />
      )}
      <div
        className={styles.imageWrapper}
        style={{ background: innerBackground }}
      >
        <div className={styles.square}>
          <img
            className={styles.image}
            style={{ visibility: itemType ? "visible" : "hidden" }}
            draggable="false"
            src={itemType ? imgSrc : null}
            alt="item"
          />
        </div>
      </div>
    </div>
  );
};

export default Item;

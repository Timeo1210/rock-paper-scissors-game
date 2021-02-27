import React, { useEffect, useRef, useState } from "react";

import styles from "./Item.module.scss";

interface ItemProps {
  itemType: ItemTypes | null;
  win?: boolean;
  handleAction?: (itemType: ItemTypes) => void;
}

const Item: React.FC<ItemProps> = ({ itemType, win, handleAction }) => {
  const containerRef = useRef(null);

  const [pressed, setPressed] = useState(false);

  const imgSrc = `/images/icon-${itemType}.svg`;
  const outerBackground = `var(--gradient-${itemType})`;
  const innerBackground = itemType ? "#f1f1f1" : "rgba(22, 25, 33, 0.38)";

  useEffect(() => {
    if (itemType) {
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
  }, []);

  return (
    <div
      ref={containerRef}
      className={styles.container}
      onClick={handleAction ? () => handleAction(itemType) : null}
    >
      {itemType && (
        <div
          className={`${styles.background} ${win ? styles.glowing : null}`}
          style={{
            background: outerBackground,
            boxShadow: pressed ? "none" : "",
            paddingBottom: pressed ? "25%" : "30%",
          }}
        ></div>
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
          />
        </div>
      </div>
    </div>
  );
};

export default Item;

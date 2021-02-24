import React, { useEffect, useRef, useState } from "react";

import styles from "./Item.module.scss";

interface ItemProps {
  itemType: ItemTypes;
  handleAction?: (itemType: ItemTypes) => void;
}

const Item: React.FC<ItemProps> = ({ itemType, handleAction }) => {
  const containerRef = useRef(null);

  const [pressed, setPressed] = useState(false);

  const imgSrc = `/images/icon-${itemType}.svg`;
  const background = `var(--gradient-${itemType})`;

  useEffect(() => {
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
  }, []);

  return (
    <div
      ref={containerRef}
      onClick={handleAction ? () => handleAction(itemType) : null}
      className={styles.container}
    >
      <div
        style={{
          background,
          boxShadow: pressed ? "none" : "",
          paddingBottom: pressed ? "25%" : "30%",
        }}
        className={styles.background}
      ></div>
      <div className={styles.imageWrapper}>
        <div className={styles.square}>
          <img draggable="false" className={styles.image} src={imgSrc} />
        </div>
      </div>
    </div>
  );
};

export default Item;

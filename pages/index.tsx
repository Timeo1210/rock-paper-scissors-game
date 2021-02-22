import React from "react";

import styles from "@/styles/index.module.scss";

import Header from "@/components/Header";
import ItemPicker from "@/components/ItemPicker";
import RulesButton from "@/components/RulesButton";

const Home: React.FC<{}> = () => {
  return (
    <div className={styles.container}>
      <Header />
      <ItemPicker />
      <div style={{ display: "none" }}></div>
      <RulesButton />
    </div>
  );
};

export default Home;

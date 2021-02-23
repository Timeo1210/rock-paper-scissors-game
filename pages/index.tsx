import React from "react";

import styles from "@/styles/index.module.scss";

import Header from "@/components/Header";
import GameManager from "@/components/GameManager";
import RulesButton from "@/components/RulesButton";

const Home: React.FC<{}> = () => {
  return (
    <div className={styles.container}>
      <Header />
      <GameManager />
      <RulesButton />
    </div>
  );
};

export default Home;

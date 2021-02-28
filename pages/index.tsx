import React from "react";

import styles from "@/styles/index.module.scss";

import { ScoreProvider } from "@/Contexts/ScoreContext";

import Header from "@/components/Header";
import GameManager from "@/components/GameManager";
import RulesButton from "@/components/RulesButton";

const Home: React.FC<{}> = () => (
  <div className={styles.container}>
    <ScoreProvider>
      <Header />
      <GameManager />
      <RulesButton />
    </ScoreProvider>
  </div>
);

export default Home;

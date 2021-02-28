/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React from "react";

interface ScoreType {
  score: number;
  setScore: (newScore: number) => void;
}

export const ScoreContext = React.createContext({
  score: 0,
} as ScoreType);

export class ScoreProvider extends React.Component<{}, ScoreType> {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      setScore: (newScore) =>
        this.setState({
          score: newScore,
        }),
    } as ScoreType;
  }

  render() {
    return (
      <ScoreContext.Provider value={this.state}>
        {this.props.children}
      </ScoreContext.Provider>
    );
  }
}

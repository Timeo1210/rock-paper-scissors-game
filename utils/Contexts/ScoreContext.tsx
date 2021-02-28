/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React from "react";

export const ScoreContext = React.createContext(null);

export class ScoreProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
    };
  }

  render() {
    return (
      <ScoreContext.Provider value={this.state}>
        {this.props.children}
      </ScoreContext.Provider>
    );
  }
}

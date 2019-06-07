import React, { Component } from "react";
import Coin from "./Coin";
export default class CoinFlipper extends Component {
  static defaultProps = {
    face: "heads",
    numTosses: 0
  };
  constructor(props) {
    super(props);
    this.setState = {
      face: "heads",
      numTosses: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.imgGetter();
  }

  imgGetter() {}
  render() {
    return (
      <div className="CoinFlipper">
        <h1>Let's flip a coin! </h1>
        <Coin headsImg={this.props.face} />
        <button onClick={this.handleClick}>Toss the coin</button>
      </div>
    );
  }
}

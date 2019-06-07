import React, { Component } from "react";

export default class Coin extends Component {
  render() {
    return (
      <div>
        <h1>This will show the coin</h1>
        <div> {this.props.headsImg} </div>
      </div>
    );
  }
}

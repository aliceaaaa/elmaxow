import React, { Component } from "react";

export default class Pluses extends Component {
  render() {
    const { isThree } = this.props;
    const fontSize = 26;
    const position = "absolute";

    return isThree ? (
      <>
        <div style={{ position, right: 102, top: 339, fontSize }}>+</div>
        <div style={{ position, right: 66, top: 339, fontSize }}>+</div>
        <div style={{ position, right: 36, top: 339, fontSize }}>+</div>
      </>
    ) : (
      <>
        <div style={{ position, left: 36, top: 543, fontSize }}>+</div>
        <div style={{ position, left: 66, top: 543, fontSize }}>+</div>
      </>
    );
  }
}

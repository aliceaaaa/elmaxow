import React, { Component } from "react";
import injectSheet from "react-jss";
import styles from "../styles";

class SupGuys extends Component {
  render() {
    const { classes } = this.props;

    const isMobile = window.innerWidth < 480;
    const fontSize =
      window.innerHeight > 800
        ? "calc(120px + 34*(100vw - 1150px)/770)"
        : "calc(80px + 34*(100vw - 1150px)/770)";
    const guysBottom = window.innerHeight / 2.8 + window.innerHeight / 5.6;

    return (
      <div
        className={classes.guys}
        style={
          isMobile
            ? {
                width: 196,
                height: 102,
                left: 66,
                top: 79,
                fontSize: 64
              }
            : {
                bottom: guysBottom,
                left: window.innerWidth / 4.033,
                fontSize
              }
        }
      >
        Sup <br /> &nbsp;guys
      </div>
    );
  }
}

export default injectSheet(styles)(SupGuys);

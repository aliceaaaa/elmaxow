import React, { Component } from "react";
import injectSheet from "react-jss";
import styles from "../styles";

class MaxChanba extends Component {
  render() {
    const { classes } = this.props;

    const isMobile = window.innerWidth < 480;
    const style = isMobile
      ? {
          top: 42,
          left: 263,
          width: 59,
          height: 30,
          fontSize: "16px"
        }
      : {
          top: window.innerHeight / 5.74,
          right: window.innerWidth / 4.5,
          width: "auto",
          height: "auto",
          fontSize: "calc(30px + 34*(100vw - 1150px)/770)"
        };

    return (
      <div className={classes.maxChanba} style={style}>
        max <br /> chanba
      </div>
    );
  }
}

export default injectSheet(styles)(MaxChanba);

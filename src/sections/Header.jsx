import React, { Component } from "react";
import injectSheet from "react-jss";
import styles from "../styles";

const hello =
  "hello hello hello hello hello hello hello hello hello hello hello hello hello hello";

class Header extends Component {
  render() {
    const { classes } = this.props;

    const isMobile = window.innerWidth < 480;
    const fontSizeSmall = "calc(10px + 3*(100vw - 480px)/1440)";
    const fontSizeBig = "calc(24px + 3*(100vw - 480px)/1440)";
    const style = isMobile
      ? {
          width: 122,
          height: 42,
          fontSize: 11
        }
      : {
          width: window.innerWidth / 3.2,
          height: window.innerHeight / 12.5,
          fontSize: window.innerWidth >= 1440 ? fontSizeBig : fontSizeSmall
        };

    return (
      <div className={classes.header} style={style}>
        <div className={classes.header1}>&nbsp; {hello}</div>
        <div className={classes.header2}>&nbsp; {hello}</div>
      </div>
    );
  }
}

export default injectSheet(styles)(Header);

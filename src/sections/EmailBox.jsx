import React, { Component } from "react";
import injectSheet from "react-jss";
import styles from "../styles";

class EmailBox extends Component {
  render() {
    const { classes } = this.props;

    const isMobile = window.innerWidth < 480;
    const fontSizeText =
      window.innerWidth >= 1440
        ? "calc(14px + 3*(100vw - 480px)/1440)"
        : "calc(10px + 3*(100vw - 480px)/1440)";

    const fontSizePlus =
      window.innerWidth >= 1440
        ? "calc(30px + 3*(100vw - 480px)/1440)"
        : "calc(20px + 3*(100vw - 480px)/1440)";

    const emailHeight = window.innerHeight / 2.8;
    const emailWidth = window.innerWidth / 9.6;

    const emailStyle = {
      bottom: window.innerHeight / 5.6,
      right: window.innerWidth / 4.5,
      width: emailWidth,
      height: emailHeight
    };

    const textStyle = {
      position: "absolute",
      top: emailHeight / 2.3,
      left: emailWidth / 7.5,
      paddingRight: emailWidth / 7.5,
      height: window.innerHeight / 5.14,
      fontSize: fontSizeText
    };

    const mobileTextStyle = {
      position: "absolute",
      width: 213,
      height: 30,
      left: 66,
      top: 585,
      fontSize: 11
    };

    return isMobile ? (
      <div style={mobileTextStyle}>
        Or drop me a line at{" "}
        <a href="mailto:elmaxow@gmail.com" className={classes.emailReference}>
          elmaxow (at) gmail (dot) com
        </a>
      </div>
    ) : (
      <div className={classes.emailBox} style={emailStyle}>
        <div style={{ fontSize: fontSizePlus }}>+</div>
        <div style={textStyle}>
          Or drop me a line at{" "}
          <a
            href="mailto:elmaxow@gmail.com"
            className={classes.emailReference}
            style={{ fontSize: fontSizeText }}
          >
            elmaxow (at) gmail (dot) com
          </a>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(EmailBox);

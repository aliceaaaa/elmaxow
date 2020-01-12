import React, { Component } from "react";
import injectSheet from "react-jss";
import styles from "../styles";

class InfoBox extends Component {
  render() {
    const { classes } = this.props;

    const isMobile = window.innerWidth < 480;
    const fontSizeSmall = "calc(10px + 3*(100vw - 480px)/1440)";
    const fontSizeBig = "calc(14px + 3*(100vw - 480px)/1440)";
    const photoWidth = window.innerWidth / 4.5;
    const socialWidth = window.innerWidth / 2.16;
    const socialHeight = window.innerHeight / 5.6;
    const emailWidth = window.innerWidth / 9.6;
    const infoHeight = window.innerHeight / 2.8;
    const paddingWidth = (socialWidth - emailWidth) / 26;

    const infoStyle = {
      bottom: socialHeight,
      height: infoHeight,
      right: emailWidth + photoWidth,
      width: socialWidth - emailWidth,
      fontSize: window.innerWidth >= 1440 ? fontSizeBig : fontSizeSmall
    };

    const aboutMeStyle = {
      top: infoHeight / 2.3,
      left: (socialWidth - emailWidth) / 26
    };

    const aboutMeMobileStyle = {
      position: "absolute",
      width: 143,
      height: 45,
      left: 197,
      top: 216,
      fontSize: 11
    };

    const zeroStyle = {
      top: infoHeight / 2.3,
      left: (socialWidth - emailWidth) / 2 + paddingWidth
    };

    const zeroMobileStyle = {
      position: "absolute",
      width: 143,
      height: 30,
      left: 197,
      top: 273,
      fontSize: 11
    };

    return isMobile ? (
      <>
        <div style={aboutMeMobileStyle}>
          I am Maximilian – <br />
          graphic designer <br />
          living in Moscow
        </div>
        <div style={zeroMobileStyle}>
          Now work at <br />
          <a
            href="http://zero.ru"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.zeroLink}
          >
            {" "}
            Zero studio
          </a>
        </div>
      </>
    ) : (
      <div className={classes.infoBox} style={infoStyle}>
        <div className={classes.aboutMeBox} style={aboutMeStyle}>
          I am Maximilian – <br />
          graphic designer living <br />
          in Moscow
        </div>
        <div className={classes.zeroBox} style={zeroStyle}>
          Now work at
          <a
            href="http://zero.ru"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.zeroLink}
          >
            {" "}
            Zero studio
          </a>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(InfoBox);

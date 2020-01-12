import React, { Component } from "react";
import injectSheet from "react-jss";
import styles from "../styles";
import { ReactComponent as Arrow } from "../svgs/arrow.svg";
import { ReactComponent as ArrowMobile } from "../svgs/arrowMobile.svg";

class Dribble extends Component {
  render() {
    const { classes } = this.props;

    const isMobile = window.innerWidth < 480;
    const isWindowBig = window.innerWidth >= 1440;
    const fontSizeBig = "calc(24px + 3*(100vw - 480px)/1440)";
    const fontSizeSmall = "calc(12px + 3*(100vw - 480px)/1440)";
    const socialWidth = window.innerWidth / 2.16;
    const socialHeight = window.innerHeight / 5.6;
    const emailWidth = window.innerWidth / 9.6;
    const paddingWidth = (socialWidth - emailWidth) / 26;

    return isMobile ? (
      <div
        className={classes.dribble}
        style={{
          position: "absolute",
          top: 72,
          width: 197,
          flexDirection: "row",
          justifyContent: "flex-start",
          paddingLeft: 17
        }}
        onClick={() => window.open("https://dribbble.com/chanba", "_blank")}
      >
        dribbble
        <ArrowMobile style={{ marginLeft: 10 }} />
      </div>
    ) : (
      <div
        className={classes.dribble}
        style={{
          width: (socialWidth - emailWidth) / 2 - paddingWidth,
          height: socialHeight,
          left: paddingWidth,
          fontSize: isWindowBig ? fontSizeBig : fontSizeSmall
        }}
        onClick={() => window.open("https://dribbble.com/chanba", "_blank")}
      >
        <Arrow style={{ marginBottom: 10 }} />
        dribbble
      </div>
    );
  }
}

export default injectSheet(styles)(Dribble);

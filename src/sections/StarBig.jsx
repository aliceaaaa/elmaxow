import React, { Component } from "react";
import styles from "../styles";
import injectSheet from "react-jss";
import star from "../photos/Star1.png";
import starMobile from "../photos/StarMobile1.png";

class StarBig extends Component {
  render() {
    const { classes } = this.props;

    const isMobile = window.innerWidth < 480;
    const width = window.innerWidth / 4.033;
    const style = isMobile
      ? {
          top: 149,
          left: 0,
          width: 74,
          height: 156,
          zIndex: 10,
          backgroundImage: `url(${starMobile})`
        }
      : {
          bottom: 0,
          left: 0,
          width: width,
          height: width * 1.484,
          zIndex: 1,
          backgroundImage: `url(${star})`
        };
    return <div className={classes.starBig} style={style} />;
  }
}

export default injectSheet(styles)(StarBig);

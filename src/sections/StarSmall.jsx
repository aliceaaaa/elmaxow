import React, { Component } from "react";
import injectSheet from "react-jss";
import styles from "../styles";
import star from "../photos/Star2.png";
import starMobile from "../photos/StarMobile2.png";

class StarSmall extends Component {
  render() {
    const { classes } = this.props;

    const isMobile = window.innerWidth < 480;
    const width = window.innerWidth / 18;
    const style = isMobile
      ? {
          top: 612,
          right: 0,
          width: 49,
          height: 51,
          zIndex: 1,
          backgroundImage: `url(${starMobile})`
        }
      : {
          top: 0,
          right: 0,
          width: width,
          height: width * 1.06,
          zIndex: 1,
          backgroundImage: `url(${star})`
        };
    return <div className={classes.starSmall} style={style} />;
  }
}

export default injectSheet(styles)(StarSmall);

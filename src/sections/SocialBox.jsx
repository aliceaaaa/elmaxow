import React, { Component } from "react";
import injectSheet from "react-jss";
import styles from "../styles";
import Dribble from "./Dribble";
import Behance from "./Behance";
import Insta from "./Insta";

class SocialBox extends Component {
  onSocialClick = ref => {
    window.open(ref, "_blank");
  };

  render() {
    const { classes } = this.props;

    const isMobile = window.innerWidth < 480;
    const socialWidth = window.innerWidth / 2.16;
    const socialHeight = window.innerHeight / 5.6;

    const socialStyles = isMobile
      ? {
          width: 203,
          height: 164,
          left: 174,
          top: 389,
          boxSizing: "border-box",
          border: "2px solid #000000",
          flexDirection: "column"
        }
      : {
          width: socialWidth,
          height: socialHeight,
          right: window.innerWidth / 4.5
        };

    return (
      <div className={classes.socialBox} style={socialStyles}>
        <Dribble onSocialClick={this.onSocialClick} />
        <Behance onSocialClick={this.onSocialClick} />
        <Insta onSocialClick={this.onSocialClick} />
      </div>
    );
  }
}

export default injectSheet(styles)(SocialBox);

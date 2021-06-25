import React, { Component } from "react";
import injectSheet from "react-jss";
import styles from "./styles";
import SocialBox from "./sections/SocialBox";
import EmailBox from "./sections/EmailBox";
import Header from "./sections/Header";
import PhotoBox from "./sections/PhotoBox";
import InfoBox from "./sections/InfoBox";
import SupGuys from "./sections/SupGuys";
import StarBig from "./sections/StarBig";
import MaxChanba from "./sections/MaxChanba";
import StarSmall from "./sections/StarSmall";
import Pluses from "./sections/Pluses";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = { x: 0, y: 0, mouseOn: false };
  }

  onMouseMove = e => {
    this.setState({ x: e.clientX - 20, y: e.clientY - 20 });
  };

  render() {
    const { classes } = this.props;
    const { mouseOn, x, y } = this.state;
    const isMobile = window.innerWidth < 480;
    const style = isMobile
      ? { cursor: "default", maxWidth: 375, overflowX: "hidden !important" }
      : {};

    return (
      <div
        className={classes.app}
        style={style}
        onMouseMove={e => this.onMouseMove(e)}
        onMouseEnter={() => this.setState({ mouseOn: true })}
        onMouseLeave={() => this.setState({ mouseOn: false })}
      >
        {!isMobile && mouseOn && (
          <div className={classes.circle} style={{ top: y, left: x }} />
        )}
        <Header />
        <MaxChanba />
        <PhotoBox />
        <StarBig />
        <StarSmall />
        <SocialBox />
        <EmailBox />
        <SupGuys />
        <InfoBox />
        {isMobile && <Pluses isThree />}
        {!isMobile && <Pluses isThree={false} />}
      </div>
    );
  }
}

export default injectSheet(styles)(Main);

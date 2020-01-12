import React, { Component } from "react";
import injectSheet from "react-jss";
import styles from "../styles";
import pic01 from "../photos/01.png";
import pic02 from "../photos/02.png";
import pic03 from "../photos/03.png";
import pic04 from "../photos/04.png";
import pic05 from "../photos/05.png";
import pic06 from "../photos/06.png";

const pics = [pic01, pic02, pic03, pic04, pic05, pic06];

class PhotoBox extends Component {
  constructor(props) {
    super(props);

    this.state = { pic: pic01, interval: "" };
  }

  changePhoto = () => {
    const interval = setInterval(() => {
      let counter = 0;
      const randomNumber = Math.floor(Math.random() * 11);
      counter = (counter + randomNumber) % pics.length;

      this.setState({ pic: pics[counter] });
    }, 200);

    this.setState({ interval });
  };

  changeStop = () => {
    clearInterval(this.state.interval);
  };

  render() {
    const { classes } = this.props;

    const isMobile = window.innerWidth < 480;
    const style = isMobile
      ? {
          left: -2,
          top: 279,
          width: 178,
          height: 245,
          boxSizing: "border-box",
          border: "2px solid #000000",
          backgroundImage: `url(${pic02})`
        }
      : {
          bottom: 0,
          right: 0,
          width: window.innerWidth / 4.5,
          height: window.innerHeight * 0.63,
          borderLeft: "2px solid #000000",
          borderTop: "2px solid #000000",
          backgroundImage: `url(${this.state.pic})`
        };

    return (
      <div
        className={classes.photoBox}
        style={style}
        onMouseOver={this.changePhoto}
        onMouseOut={this.changeStop}
      />
    );
  }
}

export default injectSheet(styles)(PhotoBox);

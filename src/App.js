import React, { Component } from 'react';
import styles from './styles';
import injectSheet from 'react-jss';
import SocialRec from './sections/SocialRec';
import EmailRec from './sections/EmailRec';
import Header from './sections/Header';
import { ReactComponent as Star } from './svgs/star.svg';
import { ReactComponent as Star2 } from './svgs/star2.svg';
import PhotoRec from './sections/PhotoRec';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { x: 0, y: 0, mouseOn: false }
  }

  onMouseMove = (e) => {
    this.setState({ x: e.clientX - 15, y: e.clientY - 15 });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.app}
        onMouseMove={e => this.onMouseMove(e)}
        onMouseEnter={() => this.setState({ mouseOn: true })}
        onMouseLeave={() => this.setState({ mouseOn: false })}
      >
        {this.state.mouseOn && <div className={classes.circle}
          style={{ top: this.state.y, left: this.state.x }}
        />}
        <Header />
        <div className={classes.maxChanba}>
          max chanba
        </div>
        <PhotoRec />
        <Star className={classes.star} />
        <Star2 className={classes.star2} />
        <SocialRec />
        <EmailRec />
        <div className={classes.sup}>Sup</div>
        <div className={classes.guys}>guys</div>
        <div className={classes.infoRec}>
          <div className={classes.aboutMeRec}>
            I am Maximilian – graphic designer living in Moscow.
          </div>
          <div className={classes.zeroRec}>
            Now work at
          <a href='http://zero.ru'
              target='_blank'
              rel="noopener noreferrer"
              className={classes.zeroLink}
            >
              {' '}Zero studio
            </a>
            .
        </div>
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(App);

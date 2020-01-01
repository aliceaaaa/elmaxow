import React, { Component } from 'react';
import ReactCursorPosition from 'react-cursor-position';
import styles from './styles';
import injectSheet from 'react-jss';
import SocialRec from './SocialRec';
import EmailRec from './EmailRec';
import Header from './Header';
import { ReactComponent as Star } from './star.svg';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { x: 0, y: 0, mouseOn: false }
  }

  onMouseMove = (e) => {
    this.setState({ x: e.clientX, y: e.clientY });
  }

  render() {
    const { classes } = this.props;
    const { color } = this.state;

    return (
      <div className={classes.app}
        onMouseMove={e => this.onMouseMove(e)}
        onMouseEnter={() => this.setState({ mouseOn: true })}
        onMouseLeave={() => this.setState({ mouseOn: false })}
      >
        <Header />
        <div className={classes.maxChanba}>
          max chanba
        </div>
        <div className={classes.emptyRec} />
        <Star className={classes.star} />
        <SocialRec />

        {this.state.mouseOn && <div className={classes.circle}
          style={{ top: this.state.y, left: this.state.x }}
        />}

        <EmailRec />
        <div className={classes.sup}>Sup</div>
        <div className={classes.guys}>guys</div>
        <div className={classes.infoRec}>
          <div className={classes.aboutMeRec}>
            I am Maximilian – graphic designer living in Moscow.
          </div>
          <div className={classes.zeroRec}>
            Now work at &nbsp;
          <a href='http://zero.ru'
              target='_blank'
              className={classes.zeroLink}
            >
              Zero studio
            </a>
            .
        </div>
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(App);

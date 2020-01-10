import React, { Component } from 'react';
import injectSheet from 'react-jss';
import styles from '../styles';
import { ReactComponent as Arrow } from '../svgs/arrow.svg';

class SocialRec extends Component {
    onSocialClick = (ref) => {
        window.open(ref, '_blank')
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.socialRec}>
                <div className={classes.dribble} onClick={() => this.onSocialClick('https://dribbble.com/chanba')} style={window.innerWidth >= 1440 ? {} : { fontSize: 'calc(12px + 3*(100vw - 480px)/1440)' }}>
                    <Arrow style={{ marginBottom: 10 }} />
                    dribbble
                </div>
                <div className={classes.behance} onClick={() => this.onSocialClick('https://behance.net/chanba')} style={window.innerWidth >= 1440 ? {} : { fontSize: 'calc(12px + 3*(100vw - 480px)/1440)' }}>
                    <Arrow style={{ marginBottom: 10 }} />
                    behance
                </div>
                <div className={classes.insta} onClick={() => this.onSocialClick('https://instagram.com/elmaxow')} style={window.innerWidth >= 1440 ? {} : { fontSize: 'calc(12px + 3*(100vw - 480px)/1440)' }}>
                    <Arrow style={{ marginBottom: 10 }} />
                    insta
                </div>
            </div>
        )
    }
}

export default injectSheet(styles)(SocialRec);
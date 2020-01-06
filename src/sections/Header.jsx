import React, { Component } from 'react';
import injectSheet from 'react-jss';
import styles from '../styles';

class Header extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.header}>
                <div className={classes.header1}>&nbsp; hello hello hello hello hello hello hello hello hello hello hello hello hello hello</div>
                <div className={classes.header2}>&nbsp; hello hello hello hello hello hello hello hello hello hello hello hello hello hello</div>
            </div>

        )
    }
}

export default injectSheet(styles)(Header);
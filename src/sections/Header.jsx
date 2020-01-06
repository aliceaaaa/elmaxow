import React, { Component } from 'react';
import injectSheet from 'react-jss';
import styles from '../styles';

class Header extends Component {
    render() {
        const { classes } = this.props;
        return (
            <marquee className={classes.header} behavior='scroll' direction='right'>
                hello hello hello hello hello hello hello hello hello hello hello hello hello hello
            </marquee>

        )
    }
}

export default injectSheet(styles)(Header);
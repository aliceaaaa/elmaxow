import React, { Component } from 'react';
import injectSheet from 'react-jss';
import styles from '../styles';

class Header extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.header}>
                hello hello hello hello hello hello hello
            </div>
        )
    }
}

export default injectSheet(styles)(Header);
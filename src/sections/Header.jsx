import React, { Component } from 'react';
import injectSheet from 'react-jss';
import styles from '../styles';

const hello = 'hello hello hello hello hello hello hello hello hello hello hello hello hello hello';

class Header extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.header}>
                <div className={classes.header1}>&nbsp; {hello}</div>
                <div className={classes.header2}>&nbsp; {hello}</div>
            </div>

        )
    }
}

export default injectSheet(styles)(Header);
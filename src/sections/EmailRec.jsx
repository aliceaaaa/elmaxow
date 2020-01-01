import React, { Component } from 'react';
import injectSheet from 'react-jss';
import styles from '../styles';
import { ReactComponent as Plus } from './plus.svg';

class EmailRec extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.emailRec}>
                <Plus style={{ marginTop: 20, marginLeft: 20 }} />
                <div className={classes.emailText} >
                    Or drop me a line at elmaxow (at) gmail (dot) com
                </div>
            </div>
        )
    }
}

export default injectSheet(styles)(EmailRec);
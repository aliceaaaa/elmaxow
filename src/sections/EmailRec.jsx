import React, { Component } from 'react';
import injectSheet from 'react-jss';
import styles from '../styles';

class EmailRec extends Component {
    onMailClick = () => {

    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.emailRec}>
                <div style={{ fontSize: 'calc(30px + 3*(100vw - 480px)/1440)', }}>+</div>
                <div className={classes.emailText} style={window.innerWidth >= 1440 ? {} : { fontSize: 'calc(10px + 3*(100vw - 480px)/1440)' }}>Or drop me a line at {' '}
                    <a
                        href="mailto:elmaxow@gmail.com"
                        className={classes.emailReference}
                        style={window.innerWidth >= 1440 ? {} : { fontSize: 'calc(10px + 3*(100vw - 480px)/1440)' }}
                    >
                        elmaxow (at) gmail (dot) com
                    </a>
                </div>
            </div>
        )
    }
}

export default injectSheet(styles)(EmailRec);
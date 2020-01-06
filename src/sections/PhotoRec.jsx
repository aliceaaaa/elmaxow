import React, { Component } from 'react';
import injectSheet from 'react-jss';
import styles from '../styles';
import pic01 from '../photos/01.png'
import pic02 from '../photos/02.png'
import pic03 from '../photos/03.png'
import pic04 from '../photos/04.png'
import pic05 from '../photos/05.png'
import pic06 from '../photos/06.png'

const pics = [pic01, pic02, pic03, pic04, pic05, pic06]

class PhotoRec extends Component {
    constructor(props) {
        super(props);

        this.state = { pic: pic01, interval: '' }
    }

    changePhoto = () => {
        const interval = setInterval(() => {
            let counter = 0;
            const randomNumber = Math.floor(Math.random() * 11);
            counter = (counter + randomNumber) % pics.length;

            this.setState({ pic: pics[counter] })
        }, 200)

        this.setState({ interval })
    }

    changeStop = () => {
        clearInterval(this.state.interval)
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.photoRec}
                onMouseOver={this.changePhoto}
                onMouseOut={this.changeStop}
                style={{ backgroundImage: `url(${this.state.pic})`, backgroundSize: 'contain' }} />
        )
    }

}

export default injectSheet(styles)(PhotoRec)
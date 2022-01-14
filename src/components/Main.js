import React, { Component } from 'react'
import Widgets from './Main/Widgets.js';
import './Main/Main.css'
import Twits from './Main/TwitsComponents/Twits.js';

export default class Main extends Component {
    render() {

        const {col} = this.props;

        return (
            <div className={`col-${col} main-sec`}>
                <Twits />
                <Widgets />
            </div>
        )
    }
}

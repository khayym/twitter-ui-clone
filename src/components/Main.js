import React, { Component } from 'react'
import './Main/Main.css'

export default class Main extends Component {
    render() {

        const {col} = this.props;

        return (
            <div className={`border col-${col} main-sec`}>
                <h2>Main</h2>
            </div>
        )
    }
}

import React, { Component } from 'react'
import './Main/Main.css'

export default class Main extends Component {
    render() {

        const {col} = this.props;

        return (
            <div className={`bg-success col-${col} main-sec`}>
                <h2>Main</h2>
            </div>
        )
    }
}

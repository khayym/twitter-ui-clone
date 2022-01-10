import React, { Component } from 'react'
import '../root.css';
import './Navigation/Nav.css';

export default class Navigation extends Component {
    render() {

        const {col} = this.props;

        return (
            <div className={`border col-${col} nav-sec`}>
                <h2>Nav</h2>
            </div>
        )
    }
}

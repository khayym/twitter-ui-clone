import React, { Component } from 'react'

export default class Main extends Component {
    render() {

        const {col} = this.props;

        return (
            <div className={`bg-success col-${col}`}>
                <h2>Main</h2>
            </div>
        )
    }
}

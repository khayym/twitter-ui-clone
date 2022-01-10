import React, { Component } from 'react'

export default class Aside extends Component {
    
    render() {

        const {col} = this.props;
        
        return (
            <div className={`bg-primary col-${col}`}>
                <h2>Aside</h2>
            </div>
        )
    }
}

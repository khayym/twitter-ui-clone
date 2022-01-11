import React, { Component } from 'react'
import './Aside/Aside.css'
export default class Aside extends Component {
    
    render() {

        const {col} = this.props;
        
        return (
            <div className={`bg-primary col-${col} aside-sec`}>
                <h2>Aside</h2>
            </div>
        )
    }
}

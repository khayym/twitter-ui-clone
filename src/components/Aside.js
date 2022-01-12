import React, { Component } from 'react'
import './Aside/Aside.css'
import Search from './Aside/Search';
import Widgets from './Aside/Widgets';

export default class Aside extends Component {
    
    render() {

        const {col} = this.props;
        
        return (
            <div className={`border col-${col} aside-sec ms-4`}>
                <Search />
                <Widgets />
            </div>
        )
    }
}

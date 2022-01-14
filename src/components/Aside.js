import React, { Component } from 'react'
import './Aside/Aside.css'
import Footer from './Aside/Footer';
import Search from './Aside/Search';
import Trends from './Aside/Trends';
export default class Aside extends Component {
    
    render() {

        const {col} = this.props;
        
        return (
            <div className={`col-${col} aside-sec ms-4`}>
                <Search />
                <Trends />  
                <Footer />
            </div>
        )
    }
}

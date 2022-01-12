import React, { Component } from 'react'
import {Icon} from '../İcon';
import './Aside.css';

export default class Search extends Component {

    render() {
        return (
            <div className='d-flex align-items-center mt-1 search-sec'>
                <Icon name="search" size='20'/>
                <input type="text" className='ms-3 w-100' placeholder='Search Tweeter'/>
            </div>
        )
    }
}

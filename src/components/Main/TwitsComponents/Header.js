import React, { Component } from 'react';
import { Icon } from '../../İcon';
import './Twits.css';


export default class Header extends Component {
    render() {
        return (
            <div className='d-flex flex-row justify-content-between align-items-center mt-3 mx-3'>
                <h2 className='h4 homeText'>Home</h2>
                <div className="headerIcon p-2 d-flex align-items-center justify-content-center rounded-circle">
                <Icon name='stars' size='20'></Icon>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import {Icon} from '../İcon'
import './Nav.css';

export default class Links extends Component {
    render() {
        const {name, icon, active, onMenuSectionClick} = this.props
        const isActive = active === name
        return (
            <li className={`d-flex align-items-center ${isActive && 'activeLi'} my-1`} onClick={() => onMenuSectionClick(name)}>
                <a href={name} className='text-decoration-none'>
                    <div className='d-flex align-items-center justify-content-center items'>
                        <Icon name={icon} size='27' />
                        <span className={isActive && 'active'}>{name}</span>
                    </div>
                </a>              
            </li>
        )
    }
}

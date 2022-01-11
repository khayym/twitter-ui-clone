import React, { Component } from 'react'
import {Icon} from '../İcon'
import './Nav.css';

export default class Links extends Component {
    render() {
        const {name, icon} = this.props

        return (
            <li className=''>
                <a href={name} className='text-decoration-none'>
                    <div className=' d-flex align-items-center justfy-content-center'>
                        <Icon name={icon} size='27' />
                        <span className=''>{name}</span>
                    </div>
                </a>              
            </li>
        )
    }
}

import React, { Component } from 'react'
import '../root.css';
import Links from './Navigation/Links';
import './Navigation/Nav.css';
import {Icon} from './İcon'


const LinksItems =[
{
    lName: 'Home',
    icon:"home"
},
{
    lName: 'Explore',
    icon:"sharp"
},
{
    lName: 'Notifications',
    icon:"notfy"
},
{
    lName: 'Messages',
    icon:"message"
},
{
    lName: 'Profile',
    icon:"profile"
},
{
    lName: 'More',
    icon:"more"
},
]

export default class Navigation extends Component {
    render() {

        const {col} = this.props;

        return (
            <div className={`border col-${col} nav-sec d-flex flex-column align-items-start `}>
                <div className="logo-section mt-3">
                    <Icon name='logo' size='31'/>
                </div>
                <nav className='mt-4'>
                    <ul className='p-0'>
                        {LinksItems.map(({lName,icon}) => (
                               <Links
                               key={lName}
                               name={lName}
                               icon={icon}
                             />
                        ))}
                    </ul>
                </nav>
            </div>
        )
    }
}


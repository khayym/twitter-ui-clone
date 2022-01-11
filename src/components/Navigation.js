import React, { Component} from 'react'
import '../root.css';
import Links from './Navigation/Links';
import './Navigation/Nav.css';
import PorfileFooter from './Navigation/PorfileFooter';
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
    lName: 'Bookmark',
    icon:"bookmark"
},
{
    lName: 'List',
    icon:"list"
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

    constructor() {
        super();

        this.state = {
            active: 'Home',
            setActive: 'Home'
        }

        
        this.handleMenuSectionClick = this.handleMenuSectionClick.bind(this)
    }

    handleMenuSectionClick(name){
        this.setState({ active: name })
    }

    render() {
        const {col} = this.props;

        return (
            <div className={`col-${col} nav-sec d-flex flex-column align-items-start justify-content-around`}>
                <div className="logo-section">
                    <Icon name='logo' size='31'/>
                </div>
                <nav className='mb-5'>
                    <ul className='p-0 w-100'>
                        {LinksItems.map(({lName,icon}) => (
                               <Links
                               key={lName}
                               name={lName}
                               icon={icon}
                               active={this.state.active}
                               onMenuSectionClick={this.handleMenuSectionClick}
                             />
                        ))}
                    <button className='btn w-100 text-white mt-2 text-center'>Tweet</button>
                    </ul>
                </nav>
                <div className='w-100 profile-section'>
                    <PorfileFooter />
                </div>
            </div>
        )
    }
}


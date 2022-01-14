import React, { Component } from 'react'
import { Icon } from '../../İcon'
import img from './pp.jpg'
import './Twits.css'

export default class MainSection extends Component {
    render() {
        return (
            <div className='d-flex flex-column mx-3 mainSection'>
               <div className="twitMain d-flex flex-row">
                    <div className="twitMainImg d-flex align-items-center">
                        <img src={img} alt="" className='rounded-circle' />
                    </div>

                    <div className="typingArea w-100 d-flex flex-column ms-1">
                        <input type="text" className='ms-2' placeholder="What's happening?"/>
                        <div className='btn-everyone d-flex flex-row align-items-center justify-content-center'>
                            <Icon name='globus' size='16'></Icon>
                            <span className='ms-1'>Everyone can reply</span>
                        </div>
                    </div>
               </div>

                <div className="liner mx-5 mt-3"></div>

               <div className="twitFooter d-flex flex-row align-items-center justify-content-between ">
                 <div className="tFooterIcons ms-5 ps-2 mt-1">
                     <Icon name="img" size='20' />
                     <Icon name="gif" size='20' />
                     <Icon name="poll" size='20' />
                     <Icon name="smile" size='20' />
                     <Icon name="calendar" size='20' />
                     <Icon name="location" size='20' />
                 </div>
                
                <div className="d-flex flex-row align-items-center justify-content-center mt-2">
                        <div className="tFBtnsRightIcon me-3 d-flex justify-content-center align-items-center" id='ss'>
                        <Icon name='add' size='16'/>
                        </div>
                        <button className='btn btn-primary d-flex align-items-center justify-content-center py-1 me-2'><span className="px-3">Tweet</span></button>
                </div>

               </div>
            </div>
        )
    }
}

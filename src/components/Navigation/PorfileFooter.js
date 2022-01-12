import React, { Component } from 'react'
import pImage from './pp.jpg'
import {Icon} from '../İcon'

export default class PorfileFooter extends Component {
    render() {
        return (
            <section className='d-flex flex-row justify-content-between p-2  mt-1 align-items-center'>
                <div className="profil-img d-flex">
                    <img src={pImage} className='rounded-circle pimg' alt="" />
                    <div className="profil-text d-flex flex-column ms-2">
                        <span className="profil-name">xeyyam</span>
                        <span className="profil-nic">@khayymkarimov</span>
                    </div>
                </div>

                <div className="profil-btn me-4">
                    <Icon name="dots" size="19"/>
                </div>
            </section>
        )
    }
}

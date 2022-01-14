import React, { Component } from 'react'
import { Icon } from '../İcon'



export default class TrendsHeader extends Component {
    render() {
        return (
            <div className='d-flex flex-row justify-content-between align-items-center mx-3 pt-3'>
                <h2 className='trends-h2'>Trends for you</h2>
                <div className="forSicon d-flex align-items-center justify-content-center ">
                <Icon name='setting' size='20' />
                </div>
            </div>
        )
    }
}

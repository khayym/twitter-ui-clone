import React, { Component } from 'react'
import TrendsHeader from './TrendsHeader'
import TrendsMain from './TrendsMain'

export default class Trends extends Component {
    render() {
        return (
            <div className='trands-sec mt-3'>
                <TrendsHeader />
                <TrendsMain />
            </div>
        )
    }
}

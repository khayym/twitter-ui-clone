import React, { Component } from 'react'
import { Timeline } from 'react-twitter-widgets'
import './Aside.css';

export default class Widgets extends Component {
    render() {
        return (
            <div className='mt-3'>
            <Timeline
            dataSource={{
            sourceType: 'profile',
            screenName: 'nytimes'
            }}
            options={{
            height: '700',
            }}
            />
            </div>
        )
    }
}

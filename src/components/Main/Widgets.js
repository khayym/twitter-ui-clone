import React, { Component } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

export default class Widgets extends Component {
    render() {
        return (
            <div className='mt-3 xey'>
                    <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="nytimes"
                    transparent
                    theme="dark"
                    noHeader
                    noFooter
                    noScrollbar
                    options={{height: 700}}
                />
            </div>
        )
    }
}

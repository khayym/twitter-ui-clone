import React, { Component } from 'react'
import Header from './Header'
import MainSection from './MainSection'

export default class Twits extends Component {
    render() {
        return (
            <div>
               <Header />
               <MainSection />
            </div>
        )
    }
}

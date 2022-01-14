import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className='d-flex flex-column mx-4 mt-3'>
                <div className="footerLinks">
                    <a href="#d" className=''>Trems of Services</a>
                    <a href="#d" className='ms-2'>Privacy Policy</a>
                    <a href="#d" className='ms-2'>Cookie Policy</a>
                    <a href="#d" className='ms-2'>Accessibility</a>
                    <a href="#d" className='ms-2'>Ads info</a>
                    <a href="#d" className='ms-2'>More...</a>
                </div>

                <h6 className='mt-1'>
                  © 2022 Twitter, Inc.
                </h6>
            </div>
        )
    }
}

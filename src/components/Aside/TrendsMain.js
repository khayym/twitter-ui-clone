import React, { Component } from 'react'
import { Icon } from '../İcon'


const trends = [
    {
        trand:'NFTs',
        trandCount:'446',
        location:'Azerbaijan'
    },
    {
        trand:'Baku',
        trandCount:'120',
        location:'Azerbaijan'
    },
    {
        trand:'IlhamAliyev',
        trandCount:'329',
        location:'Azerbaijan'
    },
    {
        trand:'Ukraine',
        trandCount:'446',
        location:'Usa'
    },
    {
        trand:'Ataturk',
        trandCount:'225',
        location:'Turkey'
    },
    {
        trand:'Shabran',
        trandCount:'78',
        location:'Azerbaijan'
    },
]

export default class TrendsMain extends Component {
    render() {
        return (
            <div className='trends-main pt-2 d-flex flex-column'>
                <ul className='ps-0'>

                    {trends.map(trnd =>{
                        return (
                        <li key={trnd.trand} className='py-3'>
                            <div className="forHover-li mx-3 d-flex flex-row justify-content-between">
                                <div className='trends-li-content'>
                                    <h5 className='twit-location'>Trending in {trnd.location}</h5>
                                    <h4 className='twit-tr'>#{trnd.trand}</h4>
                                    <h5 className='twit-count'>{trnd.trandCount}K Tweets</h5>
                                </div>
                                <div className='trends-li-icon'>
                                    <Icon name='dots' size='19' />
                                </div>
                            </div>
                         </li>
                    )})}
                </ul>
            </div>
        )
    }
}

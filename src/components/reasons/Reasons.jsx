import React from 'react'
import arrow from '../../assets/arrow.svg'
import home2 from '../../assets/home-2.png'
import {reasonsData} from '../../data/reasonsData'
import './reasons.css'
const Reasons = () => {
  return (
    <div className="reasons container">
       <div className="reasons-content max">
            <div className="header-r">
                <div className="small-r">WHY COLLECT?</div>
                <div className="big-r">
                Grow your business. Unlock more revenue
                </div>
            </div> 
            <section className="main-r">
                <div className="left-r">
                    <div className="big-lr">
                        Collect helps you do more with less
                    </div>
                    <div className="small-lr">
                    We have developed an all-inclusive
                    platform to make it your new business financial hub
                    </div>
                    <div className="devs">
                        {reasonsData.map((reason)=>(
                            <div className="dev">
                                <span><img src={reason.image} alt="" /></span>
                                <span>{reason.content}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="right-r">
                    <div className="hero-image-r">
                        <img src={home2} alt="" />
                    </div>
                    <div className="arrow-r">
                        <img src={arrow} alt="" />
                    </div>
                </div>
            </section>
       </div>
    </div>
  )
}

export default Reasons
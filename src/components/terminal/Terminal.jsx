import React from 'react'
import './terminal.css'
import home6 from '../../assets/home-6.png'
const Terminal = () => {
  return (
    <div className="terminal container">
        <div className="terminal-content max">
            <div className="left-t">
                <div className="home-6">
                    <img src={home6} alt="" />
                </div>
            </div>
            <div className="right-t">
                <div className="small-t">TERMINALS</div>
                <div className="big-t">Collect Seamless Offline Payments</div>
                <div className="details-t">
                It is your one-stop solution to never be caught off guard. You can now collect payments from your customers whenever and wherever with our mobile terminals.
                </div>
                <div className="buttons-t">
                    <a href="" className="btn blue">Get Started</a>
                    <a href="" className="btn transparent">Learn More</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Terminal
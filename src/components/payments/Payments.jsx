import React from 'react'
import './payments.css'
import home4 from '../../assets/home-4.png'
import rings from '../../assets/rings.png'
import shoot from '../../assets/shoot.png'
const Payments = () => {
  return (
    <div className="payments container ">
        <div className="payments-container max">
            <div className="left-p">
                <div className="small-p">PAYLINKS</div>
                <div className="big-p">
                Accept payments by sharing payment links
                </div>
                <div className="details-p">
                Receiving payments from your customers has been made easier than ever. Create a payment link and share via any medium of your choice to start receiving payments.
                </div>
                <div className="buttons-p">
                    <a href="" className="btn blue">Get Started</a>
                    <a href="" className="btn transparent">Learn More</a>
                </div>
            </div>
            <div className="right-p">
                <div className="home-4">
                    <img src={home4} alt="" />
                    <div className="price-container">
                        <div className="price-image">
                            <img src={rings} alt="" />
                        </div>
                        <div className="price-content">
                            <span>Wedding Photoshoot</span>
                            <span>₦250,000</span>
                        </div>
                    </div>
                    <div className="price-container">
                        <div className="price-image">
                            <img src={shoot} alt="" />
                        </div>
                        <div className="price-content">
                            <span>Photography Bootcamp</span>
                            <span>₦75,000</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payments
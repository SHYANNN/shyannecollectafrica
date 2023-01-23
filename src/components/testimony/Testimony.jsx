import React from 'react'
import './testimony.css'
import testimonial from '../../assets/testimonial.png'
import home7 from '../../assets/home-7.png'
const Testimony = () => {
  return (
    <div className="testimony container">
        <div className="testimony-content max">
            <div className="left-tes ">
               <div className="left-content ">
                    <div className="testimony-details">
                        <p>I got access to their virtual account service in less than 30 mins. Now all my payments are settled instantly, vendors are happy, customers are happy. Perfect!</p>
                    </div>
                    <div className="testimonial">
                        <div className="test-img">
                            <img src={testimonial} alt="" />
                        </div>
                        <div className="test-name">
                            <span>Toyin Moses</span>
                            <span>Manager</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-tes">
                <img src={home7} alt="" />
            </div>  
        </div>
    </div>
  )
}

export default Testimony
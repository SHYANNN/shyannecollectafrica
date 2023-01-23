import React from 'react'
import './footer.css'
import google from '../../assets/googleplay.svg'
import fb from '../../assets/fb.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'
import linkedin from '../../assets/linkedin.svg'
import app from '../../assets/appstore.svg'
const Footer = () => {
  return (
    <div className="footer container">
        <div className="footer-content max">
            <div className="footer-body">
                <div className="footer-header">Company</div>
                <div className="footer-1">
                    <span>About</span>
                    <span>Pricing</span>
                    <span>Documentation</span>
                    <span>Terms and Condition</span>
                    <span>E- Merchant Service Agreement</span>
                </div>
            </div>
            <div className="footer-body">
                <div className="footer-header"> Products</div>
                <div className="footer-1">
                    <span>Business Account</span>
                    <span>Payment</span>
                    <span>Payment Links</span>
                    <span>Terminals</span>
                    <span>Invoice</span>
                </div>
            </div>
            <div className="footer-body">
                <div className="footer-header">Address</div>
                <div className="footer-2">
                    <div className="special-f">
                        <span>Nigeria</span>
                        <span>Workstation, 350-360, Ikorodu</span>
                        <span>Road, Maryland, Lagos</span>   
                    </div>
                    <div className="special-f">
                        <span>USA</span>
                        <span>256 Chapman Road, Newark DE</span>
                        <span>19702-5499</span>   
                    </div>
                </div>
            </div>
            <div className="footer-body">
                <div className="footer-header">Contact us</div>
                <div className="footer-3">
                    <div className="contact-f">
                        <span>support@collect.africa</span>
                        <span>+234 813 7204 023</span>
                    </div>
                    <div className='img-f'>
                        <img src={google} alt="" />
                        <img src={app} alt="" />
                    </div>   
                </div>
            </div>
        </div>
        <div className="footer-mini max">
            <div className="footer-image">
                <img src={linkedin} alt="" />
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
                <img src={fb} alt="" />
            </div>
            <span>© 2021 Collect. All rights reserved - Privacy Policy</span>
        </div>
    </div>
  )
}

export default Footer
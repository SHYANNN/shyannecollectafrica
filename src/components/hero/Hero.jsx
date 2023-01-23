import React, { useState } from 'react'
import './hero.css'
// import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom'
// import Pricing from '../pricing/Pricing'
import {MdKeyboardArrowDown} from 'react-icons/md'
import appstore from '../../assets/appstore.svg'
import {BiMenu} from 'react-icons/bi'
import {GrClose} from 'react-icons/gr'
import googleplay from '../../assets/googleplay.svg'
import {productData} from '../../data/productData'
import logo from '../../assets/logo.svg'
import logo2 from '../../assets/logo2.svg'
import hero from '../../assets/hero.png'
const Hero = () => {
    const mobile = window.innerWidth <= 991 ? true: false;
    const [menu, setMenu] = useState(false);
    // const [drop, setDrop]
  return (
    <div className="hero container">
        <div className="header">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            {menu === false && mobile === true ?(
                <div className='menu'
                style={{
                    width:'40px',
                    position:'absolute',
                    right: '30px',
                    top: '20px',
                    color:'white',
                    display:'flex',
                    justifyContent:'center'
                }} 
                onClick={() => setMenu(true)}
                >
                    <BiMenu style={{
                        fontSize:'38px'
                    }}/>
                </div>
            ):(
                <div className="navbar">
                <div className="collect">
                    <img src={logo2} alt="" />
                </div>
                <div className="cancel" onClick={() => setMenu(false)}>
                    <GrClose/>
                </div>
                <div className="nav-links">
                        <ul>
                            <li><a href="">About</a></li>
                            <li className='hover'><a href="">Product <span className='down-h'><MdKeyboardArrowDown/></span></a>
                                <div className="sub-menu">
                                    {productData.map((product) =>(
                                        <div className="product">
                                            <div className="product-image">
                                                <div className="img-p">
                                                    <img src={product.image} alt="" />
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <span>{product.heading}</span>
                                                <span>{product.details}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </li>
                            <li><a href="">Pricing</a></li>
                            <li><a href="">Documentation</a></li>
                        </ul>
                </div>
                <div className="nav-specials">
                    <div className="login">Login</div>
                    <div className="stores">
                        <img src={googleplay} alt="" />
                        <img src={appstore} alt="" />
                    </div>
                </div>
            </div>  
            )}  
        </div>
        <section className="main-h max">
            <div className="main-heading">
                <span>Take control of your </span>
                <span>business and Payments</span>
            </div>
            <div className="main-info">
                <span>Accept payments online and offline, manage your business </span>
                <span>finances and grow your revenues.</span>
            </div>
            <div className="main-buttons">
                <a href="#" className="btn yellow">Create a free account</a>
                <a href="#" className="btn white">Book a demo</a>
            </div>
        </section>
        <section className="hero-image max">
            <img src={hero} alt="" />
        </section>
    </div>
  ) 
}

export default Hero
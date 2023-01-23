import React from 'react'
import './invoice.css'
import home5 from '../../assets/home-5.png'
const Invoice = () => {
  return (
    <div className="invoice container">
        <div className="invoice-content max">
          <div className="invoice-up">
            <div className="small-i">INVOICES</div>
            <div className="big-i">Issue well detailed invoices and track payments</div>
            <div className="details-i">
            Improve your cash flow with invoices. Create an invoice by adding items, discounts, tax and let our invoicing solution do the calculations for you to get paid faster!
            </div>
            <div className="buttons-i">
              <a href="" className="btn blue">Get Started</a>
              <a href="" className="btn transparent">Learn More</a>
            </div>
          </div>
          <div className="invoice-down">
            <div className="home-5">
              <img src={home5} alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Invoice
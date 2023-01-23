import React from 'react'
import Accounts from './components/accounts/Accounts'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Invoice from './components/invoice/Invoice'
import Payments from './components/payments/Payments'
import Ready from './components/ready/Ready'
import Reasons from './components/reasons/Reasons'
import Terminal from './components/terminal/Terminal'
import Testimony from './components/testimony/Testimony'

const App = () => {
  return (
    <>
      <Hero/>
      <Reasons/>
      <Accounts/>
      <Payments/>
      <Invoice/>
      <Terminal/>
      <Testimony/>
      <Ready/>
      <Footer/>
    </>
  )
}

export default App
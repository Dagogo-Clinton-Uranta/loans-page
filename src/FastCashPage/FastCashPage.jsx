import React from 'react'

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import RangeTable from './components/rangeTable/RangeTable'
import FastRequirements from './components/fastrequirements/FastRequirements'

import Footer from './components/footer/Footer'

import SubmitLoan from './components/submitloan/SubmitLoan'

const FastCashPage = () => {
 
    return (
        <>
        <Nav/>
        <Header />
       
        <About />
        <FastRequirements/>
        <SubmitLoan/>

        <Footer/>
        </>
      )
}

export default FastCashPage
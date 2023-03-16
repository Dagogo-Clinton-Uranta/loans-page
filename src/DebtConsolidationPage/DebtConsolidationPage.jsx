import React from 'react'

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import RangeTable from './components/rangeTable/RangeTable'
import FastRequirements from './components/fastrequirements/FastRequirements'
import DebtWork from './components/debtwork/DebtWork'

import Footer from './components/footer/Footer'

import SubmitLoan from './components/submitloan/SubmitLoan'
import HowToDebt from './components/howtodebt/HowToDebt'

const FastCashPage = () => {
 
    return (
        <>
        <Nav/>
        <Header />
       
       
        <FastRequirements/>
        <HowToDebt/>
        <DebtWork/>
        <SubmitLoan/>

        <Footer/>
        </>
      )
}

export default FastCashPage
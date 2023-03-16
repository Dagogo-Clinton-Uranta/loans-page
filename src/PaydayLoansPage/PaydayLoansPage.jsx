import React from 'react'

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import EmergencyLoans from './components/emergencyloans/EmergencyLoans'

import Footer from './components/footer/Footer'

import SubmitLoan from './components/submitloan/SubmitLoan'
import EmePersonal from './components/emepersonal/EmePersonal'
import HowImprovement from './components/howimprovement/HowImprovement'
import Basic from './components/basic/Basic'


const PaydayLoansPage = () => {
 
    return (
        <>
        <Nav/>
        <Header />
        
        <EmergencyLoans/>
        <EmePersonal/>
        <Basic/>
       
        <HowImprovement/>
        {/*<LookFor/>*/}
        <SubmitLoan/>

        <Footer/>
        </>
      )
}

export default PaydayLoansPage
import React from 'react'

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import EmergencyLoans from './components/emergencyloans/EmergencyLoans'

import Footer from './components/footer/Footer'

import SubmitLoan from './components/submitloan/SubmitLoan'
import EmePersonal from './components/emepersonal/EmePersonal'
import HowImprovement from './components/howimprovement/HowImprovement'


const HomeImprovementPage = () => {
 
    return (
        <>
        <Nav/>
        <Header />
       
        
        <EmergencyLoans/>
        <EmePersonal/>
        <HowImprovement/>
       
        <SubmitLoan/>

        <Footer/>
        </>
      )
}

export default HomeImprovementPage
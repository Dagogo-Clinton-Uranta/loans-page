import React from 'react'

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import RangeTable from './components/rangeTable/RangeTable'
import EmergencyLoans from './components/emergencyloans/EmergencyLoans'
import DebtWork from './components/debtwork/DebtWork'

import Footer from './components/footer/Footer'

import SubmitLoan from './components/submitloan/SubmitLoan'
import EmePersonal from './components/emepersonal/EmePersonal'
import EmeBenefits from './components/emebenefits/EmeBenefits'
import EmergencyKnow from './components/emergencyknow/EmergencyKnow'

const EmergencyPage = () => {
 
    return (
        <>
        <Nav/>
        <Header />
       
        
        <EmergencyLoans/>
        <EmePersonal/>
        <EmeBenefits/>
        <EmergencyKnow/>
        <SubmitLoan/>

        <Footer/>
        </>
      )
}

export default EmergencyPage
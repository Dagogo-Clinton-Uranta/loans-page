import React from 'react'

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import RangeTable from './components/rangeTable/RangeTable'
import Experience from './components/experience/Experience'

import Footer from './components/footer/Footer'
import Features from './components/features/Features'
import Faq from './components/Faq/Faq'
import Explainer from './components/explainer/Explainer'
import CreditUnion from './components/creditunion/CreditUnion'
import FairPersonal from './components/fairpersonal/FairPersonal'
import Basic from './components/basic/Basic'

const BadCreditPage = () => {
 
    return (
        <>
        <Nav/>
        <Header />
        {/*<Experience />*/}
        <About />
        <Explainer/>
        <RangeTable/>
        <CreditUnion/>
        <Basic/>
        <FairPersonal/>
        {/*<Features/>
        <Faq/>*/}
        <Footer/>
        </>
      )
}

export default BadCreditPage
import React from 'react'

import Header from './components/header/Header'
import Nav from './components/nav/Nav'

import Footer from './components/footer/Footer'
import Explainer from './components/explainer/Explainer'
import Faq from './components/Faq/Faq'
/*import Tutorial from './components/tutorial/Tutorial'*/
import RatesDetail from './components/ratesdetail/RatesDetail'
import PrivacyTable1 from './components/privacytable1/PrivacyTable1'
import PrivacyTable2 from './components/privacytable2/PrivacyTable2'
import PrivacyTable3 from './components/privacytable3/PrivacyTable3'
import PrivacyTable4 from './components/privacytable4/PrivacyTable4'


const PrivacyPolicyPage = () => {
 
    return (
        <>
        <Nav/>
        <Header />
        <PrivacyTable1/>
        <PrivacyTable2/>
        <PrivacyTable3/>
        <PrivacyTable4/>
        {/*<Explainer/>
        <Faq/>*/}
        <Footer/>
        </>
      )
}

export default PrivacyPolicyPage
import React from 'react'

import Header from './components/header/Header'
import Nav from './components/nav/Nav'

import Footer from './components/footer/Footer'
import Explainer from './components/explainer/Explainer'
import Faq from './components/Faq/Faq'
/*import Tutorial from './components/tutorial/Tutorial'*/
import RatesDetail from './components/ratesdetail/RatesDetail'
import RangeTable from './components/rangeTable/RangeTable'

const AdDisclosurePage = () => {
 
    return (
        <>
        <Nav/>
        <Header />
        <RatesDetail/>
        <RangeTable/>
        {/*<Explainer/>
        <Faq/>*/}
        <Footer/>
        </>
      )
}

export default AdDisclosurePage
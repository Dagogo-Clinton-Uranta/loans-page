import React from 'react'

import Header from './components/header/Header'
import Nav from './components/nav/Nav'

import Footer from './components/footer/Footer'
import Explainer from './components/explainer/Explainer'
import Faq from './components/Faq/Faq'
import Tutorial from './components/tutorial/Tutorial'

const AdDisclosurePage = () => {
 
    return (
        <>
        <Nav/>
        <Header />
        <Tutorial/>
        {/*<Explainer/>
        <Faq/>*/}
        <Footer/>
        </>
      )
}

export default AdDisclosurePage
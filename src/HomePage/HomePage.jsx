import React from 'react'

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import RangeTable from './components/rangeTable/RangeTable'
import Experience from './components/experience/Experience'

import Footer from './components/footer/Footer'
import Features from './components/features/Features'
import Faq from './components/Faq/Faq'

const HomePage = () => {
 
    return (
        <>
        <Nav/>
        <Header />
        <Experience />
        <About />
        <RangeTable/>
        <Features/>
        <Faq/>
        <Footer/>
        </>
      )
}

export default HomePage
import React from 'react'
import './nav.css'
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {BiMessageSquareDetail} from "react-icons/bi"
import {useState} from 'react'
import navIcon from '../../assets/navicon.svg'
import HamburgerMenu from './HamburgerMenu'


const Nav = () => {
 
  const [activeNav,setActiveNav] = useState('#')

 
  return (

    <nav>
  
     <div className='navContainer' >
      <div>
        <img src={navIcon} style={{width:"200px"}} alt="poorcredit logo"/>
      </div>
    
    
      <div className='navLinks desktopDisp' >    
         <a href="/#" onClick={()=>{setActiveNav('#')}} className={activeNav === '#'? 'active':''}>Home</a>
         <a href="/about" onClick={()=>{setActiveNav('#about')}} className={activeNav === '#about'? 'active':''}>About Us</a>
         <a href="/personalloans" onClick={()=>{setActiveNav('#experience')}} className={activeNav === '#experience'? 'active':''}>How it works</a>
        
      </div>  

      <HamburgerMenu className="mobileDisp"/>

    </div>
    </nav>
  )
}

export default Nav
import React ,{useState}from 'react'
import { Link } from 'react-router-dom'
import './header.css'

import LoanSlider from './LoanSlider'



const Header = () => {

   const [input,setInput] = useState(1000)

   const handleChange = (e) => {
    setInput(e.target.value);
    console.log("this is the parent speaking")
  };

  return (
    <header>
    <div className="container header__container-1">
      

      <div className="headerExplainer">
      <h1>Personal Loans Online</h1>

         <p>
         Looking for personal loans online is a great way to find lenders that may be willing to extend a loan offer to you. PersonalLoans.com is a great resource to connect you with lenders who may be able to find an offer that can work for you. We’ll assist you in getting the funds for a variety of projects and personal reasons, and we allow submissions for all credit types. Learn more below about online loans, how they work, and how to go through the online loan process.

        </p>

         <div className="consentWarning">
           <h4>By clicking "Get Started", you consent and agree:</h4>

           <div className = "selectedConsent">
           <input type="radio"  checked="checked"/>
               <p>Permit personalloans.com to use my current account details to check if I already have an account with one of its connected websites.</p>
           </div>

           <div className = "selectedConsent">
           <input type="radio"  checked="checked"/>
             <p>To receive marketing messages for loans as well as other credit-related items like banking, credit monitoring, debt relief, and credit repair</p>
           </div>

           <div className = "selectedConsent">
           <input type="radio"  checked="checked"/>
           <p> <a href="/privacypolicy" style={{textDecoration:"underline"}}>Privacy Policy</a>, <a href="/termsofuse" style={{textDecoration:"underline"}}>Terms of Use</a>, <a href="/addisclosure" style={{textDecoration:"underline"}}>Ad Disclosure</a>, <a href="/creditauthorization" style={{textDecoration:"underline"}}>Credit Authorization</a>, <a href="/ratesandfees" style={{textDecoration:"underline"}}>Rates & Fees</a> and <a style={{textDecoration:"underline"}} href="/econsent">E-Consent</a>.</p>
           </div>
         </div>
      </div>
     
     <div className='headerCTA'>
    
     <div className='CTAbox'>
       <h4>Start your online loan request</h4>
       <h5> How much would you like to borrow?</h5>
       <input
       placeholder='e.g $5000' value={input}  onChange={(e)=>{setInput(e.target.value)}}>
       
       </input>
    
       
     {  <div className='sliderLabel' style={{marginLeft:`${(input*100/3500)*16/20}%`}}>${input.toLocaleString()}</div>}
       <input
        type='range'
        onChange={(e)=>{setInput(e.target.value)}}
        min={0}
        max={3500}
        step={100}
        value={input}
        className='custom-slider'>
     </input>

       <div className='sliderEnds' style={{display:"flex", justifyContent:"space-between"}}>
        <span>$0</span>
        <span>$3,500</span>
       </div>
      
       <LoanSlider value={input} setInput={handleChange}/>

       <Link to= {'/page2'}>
       <button className='btn btn-primary btn-place'>Get Started</button>
       </Link>

     </div>
     <div className='clip-path-top-left-1'></div>
     <div className='clip-path-bottom-left-1'></div>
     <div className='clip-path-bottom-right-1'></div>
     
     
     </div>

    </div>
    </header>
  )
}

export default Header
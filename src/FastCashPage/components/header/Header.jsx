import React ,{useState}from 'react'
import './header.css'

import LoanSlider from './LoanSlider'
import {Link} from 'react-router-dom'


const Header = () => {

   const [input,setInput] = useState(1000)

   const handleChange = (e) => {
    setInput(e.target.value);
    console.log("this is the parent speaking")
  };

  return (
    
    <header>
    <div className="container header__container-2">
      

      <div className="headerExplainer">
      <h1>Fast Cash Loans</h1>

         <p>
         No matter how prepared you think you are, life is bound to catch you off guard at some point or another. There are times when we face financial energies that our bank accounts simply can't handle, and in those times, fast cash loans can be of great benefit.
        </p>

         <div className="consentWarning">
           <h4>By clicking "Get Started", you consent and agree:</h4>

           <div className = "selectedConsent">
           <input type="radio"  checked="checked"/>
               <p>Permit poorcreditquickloans.com to use my current account details to check if I already have an account with one of its connected websites.</p>
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
     <h4>Start your fast cash loan request</h4>
       <h5> How would you like to use your loan?</h5>
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

       <Link to={"/page2"}>
       <button className="btn btn-primary btn-place">Get Started</button>
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
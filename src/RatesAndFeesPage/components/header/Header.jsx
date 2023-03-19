import React from 'react'
import './consentTitle.css'



const Header = () => {
  return (
    <div id="consentTitle">
          <center className='consentTitleHeader'>
         <h1>Rates & Fees</h1>

         <p style={{fontSize:"0.9rem"}}>
         Only a lender or lending partner can provide you with 
         information on their rates and terms. This will typically
          happen shortly after your loan request is complete, and 
          you are connected with a lender or lending partner. 
          PersonalLoans.com does not make credit decisions or determine
           rates and terms. Remember, you are under no obligation to
            accept the loan offer if the terms are not satisfactory 
            for whatever reason.
         </p>

         </center>
    
    </div>
  )
}

export default Header
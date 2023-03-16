import React from 'react'
import './emepersonal.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

import homeimprove from '../../assets/homeimprove.jpeg'


const EmePersonal = () => {
  return (
    <section id='emepersonal'>
   
  
   
   <div className="container emepersonal__container">
   
      <div className="emepersonal__frontend">
      
      <h2>Personal Home Improvement Loan</h2>
       <p>
       A personal home improvement loan is a personal loan
        that can be used for anything, including home projects.
         Personal loans are great for people with good credit or
          who are preparing to sell or rent out their home. 
          They are also a good option for financing smaller, 
          less expensive home projects. Some of the benefits
           of a personal loan for home improvement are listed below.
         You will have the same payment every month, making it easier to budget for.
         You can get approved more quickly than with a HELOC.
        You don’t have to have collateral or a lot of equity in your home.
        They have shorter terms for repayment.
       </p>
  
       
      </div>

       <div className="emepersonal__backend">
       <img  src={homeimprove} style={{height:"25rem",objectPosition:"50% 60%"}} alt="lady working at desk" />
       </div>
      

   </div>

     
    
    </section>
  )
}

export default EmePersonal
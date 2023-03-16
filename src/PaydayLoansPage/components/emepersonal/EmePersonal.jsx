import React from 'react'
import './emepersonal.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

import consult from '../../assets/consult.jpeg'


const EmePersonal = () => {
  return (
    <section id='emepersonal'>
   
  
   
   <div className="container emepersonal__container">
   
      <div className="emepersonal__frontend">
      
      <h3>What Is a Tax Refund Advance Loan?</h3>
       <p>
       A tax refund advance loan is just what it sounds like.
        This is a short-term or personal loan that allows you 
        to get your tax refund sooner than you normally would.
         The loan is granted based on the expected amount you’ll
          be getting in your tax refund, and often requires you 
          to have your taxes filed in advance of the annual deadline.
    Like any type of personal loan, the money is given with the expectation
     that it will be paid back within a short time. The exact timeline depends
      on the lender, but many common short-term loan contracts are a few months
   to a year long.
These types of loans are also known as income tax loans or early income tax loans. The interest rate and other terms are also dependent upon the lender. The loan is usually given by the same company who prepared the taxes.
       </p>
  
       
      </div>

       <div className="emepersonal__backend">
       <img  src={consult} style={{height:"25rem",objectPosition:"50% 60%"}} alt="lady working at desk" />
       </div>
      

   </div>

     
    
    </section>
  )
}

export default EmePersonal
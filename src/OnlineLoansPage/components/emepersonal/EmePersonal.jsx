import React from 'react'
import './emepersonal.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

import consolidating from '../../assets/consolidating.jpeg'


const EmePersonal = () => {
  return (
    <section id='emepersonal'>
   
  
   
   <div className="container emepersonal__container">
   
      <div className="emepersonal__frontend">
      
      <h3>Why Use poorcredit.com ?</h3>
       <p>
       Submitting a request for an online loan through a trusted
        company like poorcreditquickloans.com is a great way to find lenders 
        without all the research and guessing. We are not lenders 
        ourselves; we have our own large network of lenders and also
         work with other third-party lender networks. So, by submitting 
         the loan request form on poorcreditquickloans.com, your information
          is shown to this large extended network of lenders so they
           can decide whether to offer you a loan based on the information
            you provided. This can save you time because you won’t have to 
            go to a bunch of individual lenders to find one willing to offer
            you a loan. Also, if no lenders offer you a loan, we may pass some
             limited information about you to other partners so you can receive 
             offers for debt relief, credit repair, credit monitoring or other related services.
       </p>
  
       
      </div>

       <div className="emepersonal__backend">
       <img  src={consolidating} style={{height:"25rem",objectPosition:"50% 60%"}} alt="lady working at desk" />
       </div>
      

   </div>

     
    
    </section>
  )
}

export default EmePersonal
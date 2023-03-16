import React from 'react'
import './creditunion.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import creditUnion from '../../assets/creditUnion.jpg'


const CreditUnion = () => {
  return (
    <section id='creditunion'>
   
  
   
   <div className="container creditunion__container">
   
      <div className="creditunion__frontend">
      
      <h2>Join a credit Union</h2>
       <p>
       Joining a credit union is another great way to avoid the pain points of securing small loans for bad credit. At a traditional bank or lending office, loans for people with bad credit are usually based off of the applicant’s credit score. Credit unions do things a little differently.
      When you are a member of a credit union and you apply for a loan, the review process takes into account several different factors, not just your score. Credit unions may consider your length of employment, your debt-to-income ratio, and other components of your overall financial health.
       </p>
  
       
      </div>

       <div className="creditunion__backend">
       <img src={creditUnion} alt="filling form on our website" />
       </div>
      

   </div>

     
    
    </section>
  )
}

export default CreditUnion
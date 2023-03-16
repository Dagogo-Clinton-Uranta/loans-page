import React from 'react'
import './emebenefits.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

import researchmac from '../../assets/researchmac.jpeg'


const EmeBenefits = () => {
  return (
    <section id='emebenefits'>
   
  
   
   <div className="container emebenefits__container">
   
      <div className="emebenefits__frontend">
      
      <h2>Benefits of Emergency Loans</h2>
       <p>
       Emergency loans tend to get you funding quickly,
        some even deposit the money directly into your account 
        within hours. You can use the money for whatever you want,
         which is a great way to add flexibility to a tight budget.
          There are also options available for procuring loans online,
           which means you can make a request for a loan from home and
            during the hours when most businesses are closed.
There are a few things to watch out for when it comes to emergency loans, 
however. This type of loan usually has higher rates than traditional loans 
and many companies also charge large fees. Some disreputable companies even
 engage in predatory behavior with the hope that you will miss a payment so
  they can charge late fees and keep you indebted longer.<br/>
The best way to avoid this is to always do business with a company
 you know you can trust. For example, PersonalLoans.com is a service
  that can connect you to lenders, rather than lend you money directly.
   This means we do not benefit from missed or late payments, or collect
    fees associated with your loan. Our priority is to help you gain financial
     freedom by connecting you to a trustworthy lender.
       </p>
  
       
      </div>

       <div className="emebenefits__backend" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
       <img  src={researchmac}  style={{height:"29rem",objectPosition:"50% 40%"}} alt="man working on laptop" />
       </div>
      

   </div>

     
    
    </section>
  )
}

export default EmeBenefits
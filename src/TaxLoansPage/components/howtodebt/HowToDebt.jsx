import React from 'react'
import './howtodebt.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

import consolidating from '../../assets/consolidating.jpeg'


const HowToDebt = () => {
  return (
    <section id='howtodebt'>
   
  
   
   <div className="container howtodebt__container">
   
      <div className="howtodebt__frontend">
      
      <h2>How to Consolidate Debt</h2>
       <p>
       There are a few types of consolidation loans to choose from, 
       so it is important to understand each one and choose the one that best fits your needs.
        Personal loans are the most popular form of consolidation and can
         be obtained through your credit union or lender of choice. 
         It is a good idea to compare rates and terms before committing to one lender.
          Using a trusted company like poorcreditquickloans.com is a great strategy because
           they do the legwork of connecting you with a lender and loan type that can 
           work for you.
       You may also choose to consolidate debt with a Home Equity Line of Credit or Second Mortgage.
      This can be risky because you are using your home as collateral, which could be detrimental 
     if you are unable to make the payments for some reason. If you are confident in your ability,
      however, you may be able to acquire a lower interest rate with this method. Just watch for 
      variable rates that may go up over time and be careful not to fall into the trap of acquiring
       more debt.
       </p>
  
       
      </div>

       <div className="howtodebt__backend">
       <img  src={consolidating} alt="lady checking her phone" />
       </div>
      

   </div>

     
    
    </section>
  )
}

export default HowToDebt
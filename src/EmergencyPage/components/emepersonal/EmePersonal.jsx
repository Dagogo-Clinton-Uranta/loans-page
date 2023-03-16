import React from 'react'
import './emepersonal.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

import fairpersonal from '../../assets/fairpersonal.jpg'


const EmePersonal = () => {
  return (
    <section id='emepersonal'>
   
  
   
   <div className="container emepersonal__container">
   
      <div className="emepersonal__frontend">
      
      <h2>Personal Loans</h2>
       <p>
       Personal loans can also be used as emergency cash
        loans, but may give you more time to pay them off.
        
         For example, emergency loans for the unemployed
          can cover living expenses temporarily and be repaid
           when you are working again. Personal loans can come 
           in small amounts as well, which is beneficial since
            you should never borrow more than you need and can
             reasonably pay back.
       </p>
  
       
      </div>

       <div className="emepersonal__backend">
       <img  src={fairpersonal} style={{height:"25rem",objectPosition:"50% 60%"}} alt="lady working at desk" />
       </div>
      

   </div>

     
    
    </section>
  )
}

export default EmePersonal
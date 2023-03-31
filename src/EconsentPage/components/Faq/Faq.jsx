import React from 'react'
import './faq.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import {BsWatch} from 'react-icons/bs'
import {FaLaptopCode,FaLock} from 'react-icons/fa'
import SimpleAccordion from './SimpleAccordion'

const Faq = () => {
  
const q1 = `Peer To Peer Loans`
const q2 = `Personal Installment Loans`
const q3 = `Bank Personal Loan`
/*const q4 =  `Who will see my information?`
const q5 = `What products or services will I receive offers for?`
const q6 = `What products or services will I receive offers for?`
const q7 =`Why choose a Personal Loan?`*/


const a1 = `Typical Requirements:• Credit Score: 580+• Minimum Income: $2,000 per month• Income Source: Employed, Self-Employed, or Benefits• Loan Range Given: $1,000 to $3,500
The an installment loan process is also quick and convenient. You can request a loan online by providing basic personal and financial information. Your lender or lending
 partner will provide you with a loan agreement individually tailored to your financial needs. Once you accept the loan agreement, your loan will be deposited directly into your bank 
 account. Again, review the terms of your agreement before you sign, as each lender or lending partner will have their own specific repayment process.
Consumers are encouraged to research applicable Federal and state laws, and to ask their lenders or lending partners for more information. If a lender or lending partner is wholly
 owned and operated by a federally recognized American Indian Tribe and sovereign government, applicable Tribal and Federal law governs its loans and related contracts, applications
  and documents. For example, personal installment loans can vary by state. Each state has its own rules and regulations for personal loans, so your loan amount and rate will depend
   on where you live. Also, your loan amount, APR and length of loan may depend on a variety of factors that lenders or lending partners use including your credit score and repayment history.`

const a2 = `Typical Requirements:• Credit Score: 580+• Minimum Income: $2,000 per month• Income Source: Employed,
 Self-Employed, or Benefits• Loan Range Given: $1,000 to $3,500
The installment loan process is also quick and convenient.
 You can request a loan online by providing basic personal and financial information.
  Your lender or lending partner will provide you with a loan agreement individually tailored
   to your financial needs. Once you accept the loan agreement, your loan will be deposited directly 
   into your bank account. Again, review the terms of your agreement before you sign, as each lender 
   or lending partner will have their own specific repayment process.
Consumers are encouraged to research applicable Federal and state laws, and to ask their lenders
 or lending partners for more information. If a lender or lending partner is wholly owned and operated
  by a federally recognized American Indian Tribe and sovereign government, applicable Tribal and
   Federal law governs its loans and related contracts, applications and documents. For example,
    personal installment loans can vary by state. Each state has its own rules and regulations for
     personal loans, so your loan amount and rate will depend on where you live. Also, your loan 
     amount, APR and length of loan may depend on a variety of factors that lenders or lending
      partners use including your credit score and repayment history.`

const a3 = `Typical Requirements:• Credit Score: 580+• Minimum Income: $2,000 per month• Income Source:
 Employed, Self-Employed, or Benefits• Loan Range Given: $1,000 to $3,500
The installment loan process is also quick and convenient. You can request 
a loan online by providing basic personal and financial information. Your lender or lending
 partner will provide you with a loan agreement individually tailored to your financial needs.
  Once you accept the loan agreement, your loan will be deposited directly into your bank account.
   Again, review the terms of your agreement before you sign, as each lender or lending partner
    will have their own specific repayment process.
Consumers are encouraged to research applicable Federal and state laws,
 and to ask their lenders or lending partners for more information. If a lender or lending partner 
 is wholly owned and operated by a federally recognized American Indian Tribe and sovereign government,
  applicable Tribal and Federal law governs its loans and related contracts, applications and documents.
   For example, personal installment loans can vary by state. Each state has its own rules and regulations 
   for personal loans, so your loan amount and rate will depend on where you live. Also, your loan amount, 
   APR and length of loan may depend on a variety of factors that lenders or lending partners use including 
   your credit score and repayment history.` 


const a4 = `Poor Credit Quick Loans™ provides its service completely free of charge to you. However, if you accept a loan offer from a lender, the lender will typically charge an origination fee or other fees. Lenders are required by law to disclose these fees and other important loan information to you before you accept a loan offer. It is important to fully read through the terms of the agreement prior to signing.`   
const a5 = `Poor Credit Quick Loans™ provides its service completely free of charge to you. However, if you accept a loan offer from a lender, the lender will typically charge an origination fee or other fees. Lenders are required by law to disclose these fees and other important loan information to you before you accept a loan offer. It is important to fully read through the terms of the agreement prior to signing.`
const a6 = `Poor Credit Quick Loans™ provides its service completely free of charge to you. However, if you accept a loan offer from a lender, the lender will typically charge an origination fee or other fees. Lenders are required by law to disclose these fees and other important loan information to you before you accept a loan offer. It is important to fully read through the terms of the agreement prior to signing.`
const a7 = `Poor Credit Quick Loans™ provides its service completely free of charge to you. However, if you accept a loan offer from a lender, the lender will typically charge an origination fee or other fees. Lenders are required by law to disclose these fees and other important loan information to you before you accept a loan offer. It is important to fully read through the terms of the agreement prior to signing.`
  
  return (
    <section id='faq'>
   
    
  

  
   <div className="container faq__container">
   
     <center>
   <h1>Types Of Loans	<span style={{fontSize:"1.3rem"}}>&#174;</span></h1>
      </center>
     <SimpleAccordion header={q1} body={a1}/>
     <SimpleAccordion header={q2} body={a2}/>
     <SimpleAccordion header={q3} body={a3}/>
    

          

   </div>

     
     
    </section>
  )
}

export default Faq
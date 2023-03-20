import React from 'react'
import './faqhome.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import {BsWatch} from 'react-icons/bs'
import {FaLaptopCode,FaLock} from 'react-icons/fa'
import SimpleAccordion from './SimpleAccordion'

const Faq = () => {
  
const q1 = `What is “Annual Percentage Rate” - APR?`
const q2 = `How do I repay my loan?`
const q3 = `What if I am late on payments?`
const q4 =  `Who will see my information?`
const q5 = `What products or services will I receive offers for?`
const q6 = `What products or services will I receive offers for?`
const q7 =`Why choose a Personal Loan?`


const a1 = `Poor Credit Quick Loans™ provides its service completely free of charge to you. However, if you accept a loan offer from a lender, the lender will typically charge an origination fee or other fees. Lenders are required by law to disclose these fees and other important loan information to you before you accept a loan offer. It is important to fully read through the terms of the agreement prior to signing.`
const a2 = `Poor Credit Quick Loans™ provides its service completely free of charge to you. However, if you accept a loan offer from a lender, the lender will typically charge an origination fee or other fees. Lenders are required by law to disclose these fees and other important loan information to you before you accept a loan offer. It is important to fully read through the terms of the agreement prior to signing.`
const a3 = `Poor Credit Quick Loans™ provides its service completely free of charge to you. However, if you accept a loan offer from a lender, the lender will typically charge an origination fee or other fees. Lenders are required by law to disclose these fees and other important loan information to you before you accept a loan offer. It is important to fully read through the terms of the agreement prior to signing.` 
const a4 = `Poor Credit Quick Loans™ provides its service completely free of charge to you. However, if you accept a loan offer from a lender, the lender will typically charge an origination fee or other fees. Lenders are required by law to disclose these fees and other important loan information to you before you accept a loan offer. It is important to fully read through the terms of the agreement prior to signing.`   
const a5 = `Poor Credit Quick Loans™ provides its service completely free of charge to you. However, if you accept a loan offer from a lender, the lender will typically charge an origination fee or other fees. Lenders are required by law to disclose these fees and other important loan information to you before you accept a loan offer. It is important to fully read through the terms of the agreement prior to signing.`
const a6 = `Poor Credit Quick Loans™ provides its service completely free of charge to you. However, if you accept a loan offer from a lender, the lender will typically charge an origination fee or other fees. Lenders are required by law to disclose these fees and other important loan information to you before you accept a loan offer. It is important to fully read through the terms of the agreement prior to signing.`
const a7 = `Poor Credit Quick Loans™ provides its service completely free of charge to you. However, if you accept a loan offer from a lender, the lender will typically charge an origination fee or other fees. Lenders are required by law to disclose these fees and other important loan information to you before you accept a loan offer. It is important to fully read through the terms of the agreement prior to signing.`
  
  return (
    <section id='faqhome'>
   
   <h2>Frequently Asked Questions</h2>

  
   <div className="container faqhome__container">
   
     <SimpleAccordion className ="faqhome__item" header={q1} body={a1}/>
     <SimpleAccordion className ="faqhome__item" header={q2} body={a2}/>
     <SimpleAccordion className ="faqhome__item" header={q3} body={a3}/>
     <SimpleAccordion className ="faqhome__item" header={q4} body={a4}/>
     <SimpleAccordion className ="faqhome__item" header={q5} body={a5}/>
     <SimpleAccordion className ="faqhome__item" header={q6} body={a6}/>
     <SimpleAccordion className ="faqhome__item" header={q7} body={a7}/>
      

          

   </div>

     
     
    </section>
  )
}

export default Faq
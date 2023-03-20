import React from 'react'
import './form4.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import BasicSelect from './BasicSelect'


const Form4 = () => {
  return (
    <section id='Form4'>
   
   <h2>Alexander, we're here to help with your Loan request.</h2>
   
   <div className="container Form4__container">
   
      <div className="Form4__frontend">
       
       <div className="formQuestion"> 
       <h4>What is your contact information? </h4>
       <p>
       Lending partners may reach out to you to confirm your loan request. You may also receive offers for other credit-related services. Learn more here.
       </p>

       </div>

       <div className="formAnswerSingle">
      
        <div>
       <label for="email">Email</label>
      <input type="text" id="email" name="email"/> 
      </div>

       <p>
       By entering your email, you agree to receive emails from us,
        our lending partners, and other marketing partners offering 
        or marketing loans, debt relief, and other credit-related services.
       </p>
       
       
        <div>
      <label for="phone_number2">Phone Number  (optional)</label>
      <input type="text" id="phone-number" name="phone_number"/>
      </div>

      Entering your phone number and clicking "Continue" is your e-signature instructing us and up to
       five of our lending partners and other marketing partners to send you offers and other messages 
       about loans, debt relief, and other credit-related services by text message, automatic phone call, 
       and/or prerecorded message, even if you are on a do-not-call list. Consent is not required to buy any
        goods and services; you may choose to contact customer support at 1-800-772-2274.
      </div>


    </div>

    

    <div className = "formContinue">
        <button className="btn btn-primary">
          CONTINUE
          </button>
       </div>

   </div>

     
     
    </section>
  )
}

export default Form4
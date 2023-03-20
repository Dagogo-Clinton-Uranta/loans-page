import React from 'react'
import './form3.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import BasicSelect from './BasicSelect'


const Form3 = () => {
  return (
    <section id='Form3'>
   
   <h2>Alexander, we're here to help with your Loan request..</h2>
   
   <div className="container Form3__container">
   
      <div className="Form3__frontend">
       
       <div className="formQuestion"> 
       <h4>What is your address? </h4>
       <p>
       Lenders may use your address to help verify your identity and to help determine your loan eligibility.
    Our marketing partners may use this information to help send you offers or other messages about loans, debt relief, and other credit-related services.
       </p>

       </div>

       <div className="formAnswerSingle">
      
        <div>
       <label for="address">Address</label>
      <input type="text" id="javascript" name="address"/> 
      </div>
       
       
        <div>
      <label for="address_2">Address line 2 (Optional)</label>
      <input type="text" id="javascript" name="address_2"/>
      </div>

      <div>
      <label for="zip_code">Zip Code</label>
      <input type="text" id="javascript" name="zip code"/>
      </div>

      <div>
      <label for="city">City</label>
      <input type="text" id="javascript" name="city"/>
      </div>


      <div>
      <label for="state">State</label>
      <input type="text" id="javascript" name="state"/>
      </div>


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

export default Form3
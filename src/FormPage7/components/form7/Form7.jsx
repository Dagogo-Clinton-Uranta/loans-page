import React from 'react'
import './form7.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import BasicSelect from './BasicSelect'


const Form7 = () => {
  return (
    <section id='Form7'>
   
   <h2>Your request is almost complete</h2>
   
   <div className="container Form7__container">
   
      <div className="Form7__frontend">
       
       <div className="formQuestion"> 
       <h4>What type of bank account do you have? </h4>
       <p>
       Select the type of account you would like your loan deposited to.
TIP: Lenders and lending partners are more likely to fund to a checking account than a savings account.
       </p>

       </div>

       <div className="formAnswerSingle">
      
       <fieldset id="groupBankAccount">
        <div className='radioCover'>
       <input type="radio" className='radio' name="groupBankAccount"></input>Checking
       </div>

     <div className='radioCover'>
     <input type="radio" className='radio' name="groupBankAccount"></input> Savings
     </div>

    </fieldset>
      </div>


    </div>

   

      <div className="Form7__frontend">
       
       <div className="formQuestion"> 
       <h4>What is your Social Security Number? </h4>
       <p>
       Lenders and lending partners use your SSN to verify your identity, to help prevent fraud and to check your credit. It is important to provide a valid SSN when submitting a loan request. We use data encryption to protect your information when submitting on our website.
       </p>

       </div>

       <div className="formAnswerSingle">
      
        <div>
       <label for="ssn">Social Security Number</label>
       <input type="text" id="ssn" name="ssn"/>  
      </div>

       <div>
        By entering your social security number, you are providing written instruction undr the Fair Credit Act and other laws for poorcreditquickloans.com and the lenders who review your loan  to obtain your credit report from one or more consumer reporting agencies and to use your credit profile and the information you provide on this form to evaluate your loan inquiry and your creditworthiness.
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

export default Form7
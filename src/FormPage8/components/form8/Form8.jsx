import React from 'react'
import './form8.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import BasicSelect from './BasicSelect'


const Form8 = () => {
  return (
    <section id='Form8'>
   
   <h2>Thanks Alexander, Please help us verify your identity...</h2>
   
   <div className="container Form8__container">
   
      <div className="Form8__frontend">
       
       <div className="formQuestion"> 
       <h4>What is your driver's license or state ID number?</h4>
       <p>
       Providing accurate information allows lenders and lending partners to customize your loan offer and gives you the best chance of being approved.
       We may also share this information with our marketing partners so they can send you offers or other messages about loans, debt relief, and other credit-related services.
       </p>

       </div>

       <div className="formAnswerSingle">
      
        <div>
       <label for="license">License</label>
      <input type="text" id="license" name="license"/> 
      </div>
       
       
        <div>
      <label for="issuing_state">Issuing State</label>
      <input type="text" id="issuing_state" name="issuing_state"/>
      </div>
      </div>


    </div>

      <hr />

      <div className="Form8__frontend">
       
       <div className="formQuestion"> 
       <h4>Are you paid with direct deposit or paper check?</h4>
       <p>
       If your paycheck is funded directly to your banking account, select direct deposit.<br/>
TIP: Lenders and lending partners are more likely to fund a loan to an account with direct deposit.
       </p>

       </div>

       <div className="formAnswerSingle">
      
       <fieldset id="groupPaytype">
        <div className='radioCover'>
       <input type="radio" className='radio' name="groupPaytype"></input>Direct Deposit
       </div>

     <div className='radioCover'>
     <input type="radio" className='radio' name="groupPaytype"></input>Paper Check
     </div>

    </fieldset>

      </div>
       
       
       
      </div>


   


    <div className="Form8__frontend">
       
       <div className="formQuestion"> 
       <h4>How many months have you been at your bank? </h4>
      

       </div>

       <div className="formAnswer">
      
        <div>
       <label for="first name">Months at Bank</label>
       <BasicSelect/>
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

export default Form8
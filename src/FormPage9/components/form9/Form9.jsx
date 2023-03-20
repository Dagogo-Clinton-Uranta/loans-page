import React from 'react'
import './form9.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import BasicSelect from './BasicSelect'


const Form9 = () => {
  return (
    <section id='Form9'>
   
   <h2>Almost there, let's do this!</h2>
   
   <div className="container Form9__container">
   
      <div className="Form9__frontend">
       
       <div className="formQuestion"> 
       <h4>What is your credit score? </h4>
       <p>
       We ask for this information to help ensure that you are connected with a lender or lending partner that can work for you.
       </p>

       </div>

       <div className="formAnswerSingle">
      
        <div>
       <label for="credit score">Credit Score</label>
       <BasicSelect/>
      </div>
       
       
      </div>


    </div>

      <hr />

      <div className="Form9__frontend">
       
       <div className="formQuestion"> 
       <h4>Do you have any unsecured debt? </h4>
       

       </div>

       <div className="formAnswerSingle">
      
        <div>
       <label for="first name">Date of Birth</label>
       <BasicSelect/>
      </div>
       
       
       
      </div>


    </div>


    <div className="Form9__frontend">
       
       <div className="formQuestion"> 
       <h4>Do you own a car that is paid off? </h4>
       <p>
       We may have title loan options for you that could have better rates.
       </p>

       </div>

       <div className="formAnswer">
      
       
        
       <fieldset id="groupCarPaidOff">
        <div className='radioCover9'>
       <input type="radio" className='radio' name="groupCarPaidOff"></input>Yes, and I want to see title loan options
       </div>

     <div className='radioCover9'>
     <input type="radio" className='radio' name="groupCarPaidOff"></input>Yes, but don't show title loan options
     </div>

     <div className='radioCover9'>
     <input type="radio" className='radio' name="groupCarPaidOff"></input>No, I don't own a car that is paid off
     </div>

    </fieldset>
       
      
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

export default Form9
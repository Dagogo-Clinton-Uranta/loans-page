import React from 'react'
import './form6.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import BasicSelect from './BasicSelect'


const Form6 = () => {
  return (
    <section id='Form6'>
   
   <h2>First We'll want to know a little bit about you...</h2>
   
   <div className="container Form6__container">
   
      <div className="Form6__frontend">
       
       <div className="formQuestion"> 
       <h4>What is your primary source of income? </h4>
       <p>
       Our Lenders and lending partners require this information to determine your eligibility
        and your ability to repay your loan. Alimony, child support, and seperate maintenance
         income do not need to be included if you do not want it to be considered as a basis for repayment for lender’s loan offer that you may be connected with.
       </p>

       </div>

       <div className="formAnswerSingle">
      
        <div>
       <label for="incomeSource">Income Source</label>
      <input type="text" id="javascript" name="incomeSource"/> 
      </div>
       
       
       
      </div>


    </div>

      <hr />

      <div className="Form6__frontend">
       
       <div className="formQuestion"> 
       <h4>If you are employed, how long have you been employed for? </h4>
      

       </div>

       <div className="formAnswerSingle">
      
        <div>
       <label for="time_employed">Time Employed(years)</label>
       <input type="text" id="time_employed" name="time_employed"/>  
      </div>
       
       
       
      </div>


    </div>


    <div className="Form6__frontend">
       
       <div className="formQuestion"> 
       <h4>How often do you get paid or receive other income? </h4>
       

       </div>

       <div className="formAnswerSingle">
      
        <div>
       <label for="first name">I get paid</label>
       <BasicSelect/>
      </div>
       
       
      
      </div>


    </div>


    <div className="Form6__frontend">
       
       <div className="formQuestion"> 
       <h4>Are you in the military, or are you the spouse or dependant of someone in the military? </h4>
       

       </div>

       <div className="formAnswerSingle">
      


      <fieldset id="groupMilitary">
        <div className='radioCover'>
       <input type="radio" className='radio' name="groupMilitary"></input>YES
       </div>

     <div className='radioCover'>
     <input type="radio" className='radio' name="groupMilitary"></input>NO
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

export default Form6
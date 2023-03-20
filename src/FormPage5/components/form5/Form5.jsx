import React from 'react'
import './form5.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import BasicSelect from './BasicSelect'


const Form5 = () => {
  return (
    <section id='Form5'>
   
   <h2>Alexander, we're here to help with your Loan request.</h2>
   
   <div className="container Form5__container">
   
      <div className="Form5__frontend">
       
       <div className="formQuestion"> 
       <h4>How long have you lived at XXXXXXX / </h4>
      

       </div>

       <div className="formAnswerSingle">
      
        <div>
       <label for="living_length">Length at address</label>
        <BasicSelect/>
      </div>
       
      
      </div>


    </div>

      <hr />

      <div className="Form5__frontend">
       
       <div className="formQuestion"> 
       <h4>Do you own your home ? </h4>
       
       </div>

       <div className="formAnswerSingle">
      
     
     
      <fieldset id="groupOwnhome">
        <div className='radioCover'>
       <input type="radio" className='radio' name="groupOwnhome"></input>YES
       </div>

     <div className='radioCover'>
     <input type="radio" className='radio' name="groupOwnhome"></input>NO
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

export default Form5
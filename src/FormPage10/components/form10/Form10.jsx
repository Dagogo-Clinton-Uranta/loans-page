import React from 'react'
import './form10.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import BasicSelect from './BasicSelect'


const Form10 = () => {
  return (
    <section id='Form10'>
   
   <h2>First We'll want to know a little bit about you...</h2>
   
   <div className="container Form10__container">
   
      <div className="Form10__frontend">
       
       <div className="formQuestion"> 
       <h4>What is your name? </h4>
       <p>
       Providing accurate information allows lenders and lending partners to customize your loan offer and gives you the best chance of being approved.
       We may also share this information with our marketing partners so they can send you offers or other messages about loans, debt relief, and other credit-related services.
       </p>

       </div>

       <div className="formAnswer">
      
        <div>
       <label for="first name">First Name</label>
      <input type="text" id="javascript" name="fav_language"/> 
      </div>
       
       
        <div>
      <label for="last name">Last Name</label>
      <input type="text" id="javascript" name="fav_language"/>
      </div>
      </div>


    </div>

      <hr />

      <div className="Form10__frontend">
       
       <div className="formQuestion"> 
       <h4>What is your date of birth? </h4>
       <p>
       Our lenders may use your date of birth to verify your identity and evaluate your loan inquiry.
       </p>

       </div>

       <div className="formAnswerSingle">
      
        <div>
       <label for="first name">Date of Birth</label>
       <input type="date" id="javascript" name="fav_language"/>  
      </div>
       
       
       
      </div>


    </div>


    <div className="Form10__frontend">
       
       <div className="formQuestion"> 
       <h4>What is the loan Reason? </h4>
       <p>
       Please let us know what you plan to use your loan for.
       </p>

       </div>

       <div className="formAnswer">
      
        <div>
       <label for="first name">Loan Reason</label>
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

export default Form10
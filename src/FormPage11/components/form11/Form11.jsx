import React from 'react'
import './form11.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import BasicSelect from './BasicSelect'
import samplerouting from './samplerouting.png'


const Form11 = () => {
  return (
    <section id='Form11'>
   
   <h2>Alexander, we have several partners interested in providing you funding.</h2>
   
   <div className="container Form11__container">
   
      <div className="Form11__frontend">
       
       <div className="formQuestion"> 
       <h4>What is your driver's license or state ID number? </h4>
       <p>
       Enter your driver's license ID or your state ID number.<br/>

Lenders and lending partners must be able to verify your identity when reviewing your request.
       </p>

       </div>

       <div className="formAnswerSingle">
      
        <div>
       <label for="license">License</label>
      <input type="text" id="license" name="license"/> 
      </div>
       
       
        <div>
      <label for="Issuing_State">Issuing State</label>
      <input type="text" id="Issuing_State" name="Issuing_State"/>
      </div>
      </div>


    </div>


    <div className="Form11__frontend">
       
       <div className="formQuestion"> 
       <h4>Which Bank Account Will you receive your loan ? </h4>
       <p>
       Please provide accurate information of where you would like
        your funds deposited. We use data encryption to protect your 
        information when you submit on our website.
       </p>

       </div>

       <div className="formAnswerSingle">
      
        <div>
       <label for="license">ABA/Routing Number</label>
      <input type="text" id="license" name="license"/> 
      </div>
       
       
        <div>
      <label for="Issuing_State">Account Number</label>
      <input type="text" id="Issuing_State" name="Issuing_State"/>
      </div>
      </div>


    </div>


    <div   className = "formContinue">
        <img style={{width:"100%"}} src={samplerouting} alt="smaple routing number and account number" />
       </div>



    <div className = "formContinue" >
        <button className="btn btn-primary">
          SUBMIT
          </button>
       </div>

   </div>

     
     
    </section>
  )
}

export default Form11
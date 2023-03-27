import React,{useState,useEffect} from 'react'
import './form4.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import BasicSelect from './BasicSelect'
import { Link,useNavigate } from 'react-router-dom'
import {BsArrowLeftShort} from 'react-icons/bs'


const Form4 = () => {

  const [email,setEmail] = useState('')
  const [phoneNumber,setPhoneNumber] = useState('')
  
  const [formName,setFormName] = useState('')
  const [loading,setLoading] = useState(false)
 const [continueCondition,setContinueCondition] = useState(false)

  const navigate = useNavigate()
 
  
  const savePage4 = () => {
   setLoading(true)
  sessionStorage.setItem("email",email)
  sessionStorage.setItem("phoneNumber",phoneNumber)
  
  setLoading(false)
  setTimeout(navigate('/page5'),1500)
  }
  
  
  useEffect(()=>{
  
    sessionStorage.getItem("firstName") !="null" && setFormName(sessionStorage.getItem("firstName"))
    sessionStorage.getItem("email") !="null" && setEmail(sessionStorage.getItem("email"))
    sessionStorage.getItem("phoneNumber") !="null" && setPhoneNumber(sessionStorage.getItem("phoneNumber"))
  
  },[])


  useEffect(()=>{
    if(email !=="null"||" " && phoneNumber !=="null"|| " "){
      console.log(email)
      console.log(phoneNumber)
      setContinueCondition(true)
    }

    if(email ==="" || phoneNumber === ""){
      
      setContinueCondition(false)
    }


  },
  [email,phoneNumber])



  const back = ()=>{
    navigate(-1)
  }



  return (
    <section id='Form4'>

<button onClick={back} 
     style={{fontSize:"1.3rem",
             fontWeight:"bold",
             position:"relative",
             left:"10%",
             display:"flex",
             justifyContent:"center",
             alignItems:"center",
             justifyContent:"center",
             alignItems:"center",
             paddingBottom:"2rem",
             backgroundColor:"transparent"}}> 
             <BsArrowLeftShort/> Back
             </button>
   
   
   <h2><span style={{color:"green"}}>{formName && formName}</span>{formName && ","} we're here to help with your Loan request.</h2>
   
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
      <input type="text" id="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/> 
      </div>

       <p>
       By entering your email, you agree to receive emails from us,
        our lending partners, and other marketing partners offering 
        or marketing loans, debt relief, and other credit-related services.
       </p>
       
       
        <div>
      <label for="phone_number2">Phone Number</label>
      <input type="text" id="phone-number" name="phone_number" value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}}/>
      </div>

      Entering your phone number and clicking "Continue" is your e-signature instructing us and up to
       five of our lending partners and other marketing partners to send you offers and other messages 
       about loans, debt relief, and other credit-related services by text message, automatic phone call, 
       and/or prerecorded message, even if you are on a do-not-call list. Consent is not required to buy any
        goods and services; you may choose to contact customer support at 1-800-772-2274.
      </div>


    </div>

    

    <div className = "formContinue">
    <button 
        disabled={!continueCondition}
        className={`btn-f ${continueCondition && `btn-primary`}`}
        onClick ={savePage4}
        >
         {loading?"...loading" :"CONTINUE"}
        </button>
       </div>

   </div>

     
     
    </section>
  )
}

export default Form4
import React, {useEffect,useState} from 'react'
import './form8.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import BasicSelect from './BasicSelect'
import { Link,useNavigate } from 'react-router-dom'
import {BsArrowLeftShort} from 'react-icons/bs'



const Form8 = () => {

  const [loading,setLoading] = useState(false)
  const [continueCondition,setContinueCondition] = useState(false)
  const [formName,setFormName] = useState('')
  const [recordedAddress,setRecordedAddress] = useState('')

  const [licenseId,setLicenseId] = useState('')
  const [timeAtBank,setTimeAtBank] = useState('')
  
  const [payementMethod,setPayementMethod] = useState('')
  const [licenseIssuer,setLicenseIssuer] = useState('')

   const navigate = useNavigate()
  
   
   const savePage8 = () => {
    setLoading(true)
   sessionStorage.setItem("licenseId",licenseId)
   sessionStorage.setItem("timeAtBank",timeAtBank)
   sessionStorage.setItem("payementMethod",payementMethod)
   sessionStorage.setItem("licenseIssuer",licenseIssuer)
   
   setLoading(false)
   setTimeout(navigate('/page9'),1500)
   }
   
   
   useEffect(()=>{
   
     sessionStorage.getItem("firstName") !="null" && setFormName(sessionStorage.getItem("firstName"))
     sessionStorage.getItem("address") !="null" && setRecordedAddress(sessionStorage.getItem("address"))
     sessionStorage.getItem("licenseId") !="null" && setLicenseId(sessionStorage.getItem("licenseId"))
     sessionStorage.getItem("timeAtBank") !="null" && setTimeAtBank(sessionStorage.getItem("timeAtBank"))
     sessionStorage.getItem("licenseIssuer") !="null" && setLicenseIssuer(sessionStorage.getItem("licenseIssuer"))
     sessionStorage.getItem("payementMethod") !="null" && setPayementMethod(sessionStorage.getItem("payementMethod"))
   
   },[])
 
 
   useEffect(()=>{
     if((licenseId !==null||"") && (timeAtBank !==null|| "")  && (licenseIssuer!==null|| "") &&  (payementMethod !==null|| "")){
      setContinueCondition(true)
     }
 
     if(licenseId ==="" || timeAtBank === "" || licenseIssuer === "" || payementMethod === ""){
       
       setContinueCondition(false)
     }
 
 
   },
   [licenseId,timeAtBank,licenseIssuer,payementMethod])


   const back = ()=>{
    navigate(-1)
  }

  return (
    <section id='Form8'>
      
      <button onClick={back} 
     style={{fontSize:"1.3rem",
             fontWeight:"bold",
             position:"relative",
             left:"10%",
             display:"flex",
             justifyContent:"center",
             alignItems:"center",
             paddingBottom:"2rem",
             backgroundColor:"transparent"}}> 
             <BsArrowLeftShort/> Back
             </button>
   
   <h2>Thanks <span style={{color:"green"}}>{formName && formName}</span>{formName && ","} Please help us verify your identity...</h2>
   
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
      <input type="text" id="license" name="license" value={licenseId} onChange={(e)=>{setLicenseId(e.target.value)}}/> 
      </div>
       
       
        <div>
      <label for="issuing_state">Issuing State</label>
      <input type="text" id="issuing_state" name="issuing_state" value={licenseIssuer} onChange={(e)=>{setLicenseIssuer(e.target.value)}}/>
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
       <input type="radio" className='radio' name="groupPaytype" value={payementMethod} onChange={()=>{setPayementMethod("Direct Deposit")}}></input>Direct Deposit
       </div>

     <div className='radioCover'>
     <input type="radio" className='radio' name="groupPaytype" value={payementMethod} onChange={()=>{setPayementMethod("Paper check")}}></input>Paper Check
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
       <label for="months_at_bank">Months at Bank</label>
       <input type="text" id="months_at_bank" name="months_at_bank" value={timeAtBank} onChange={(e)=>{setTimeAtBank(e.target.value)}}/>
       {/*<BasicSelect/>*/}
      </div>
       
       
      
      </div>


    </div>

    <div className = "formContinue">
    <button 
        disabled={!continueCondition}
        className={`btn-f ${continueCondition && `btn-primary`}`}
        onClick ={savePage8}
        >
         {loading?"...loading" :"CONTINUE"}
        </button>
       </div>

      
   </div>

     
     
    </section>
  )
}

export default Form8
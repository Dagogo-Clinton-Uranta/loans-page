import React,{useState,useEffect} from 'react'
import './form6.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import BasicSelect from './BasicSelect'
import { Link,useNavigate } from 'react-router-dom'
import {BsArrowLeftShort} from 'react-icons/bs'


const Form6 = () => {


  const [loading,setLoading] = useState(false)
  const [continueCondition,setContinueCondition] = useState(false)
  const [formName,setFormName] = useState('')
  const [incomeSource,setIncomeSource] = useState('')
  const [timeEmployed,setTimeEmployed] = useState('')
  const [recordedAddress,setRecordedAddress] = useState('')
  const [paymentFreq,setPaymentFreq] = useState('')
  const [inMilitary,setInMilitary] = useState('')

   const navigate = useNavigate()
  
   
   const savePage6 = () => {
    setLoading(true)
   sessionStorage.setItem("incomeSource",incomeSource)
   sessionStorage.setItem("timeEmployed",timeEmployed)
   sessionStorage.setItem("paymentFreq",paymentFreq)
   sessionStorage.setItem("inMilitary",inMilitary)
   
   setLoading(false)
   setTimeout(navigate('/page7'),1500)
   }
   
   
   useEffect(()=>{
   
     sessionStorage.getItem("firstName") !="null" && setFormName(sessionStorage.getItem("firstName"))
     sessionStorage.getItem("address") !="null" && setRecordedAddress(sessionStorage.getItem("address"))
     sessionStorage.getItem("incomeSource") !="null" && setIncomeSource(sessionStorage.getItem("incomeSource"))
     sessionStorage.getItem("timeEmployed") !="null" && setTimeEmployed(sessionStorage.getItem("timeEmployed"))
     sessionStorage.getItem("inMilitary") !="null" && setInMilitary(sessionStorage.getItem("inMilitary"))
     sessionStorage.getItem("paymentFreq") !="null" && setPaymentFreq(sessionStorage.getItem("paymentFreq"))
   
   },[])
 
 
   useEffect(()=>{
     if((incomeSource !=="null"||"") && (timeEmployed !=="null"|| "")  && (inMilitary!=="null"|| "") &&  (paymentFreq !=="null"|| "")){
      setContinueCondition(true)
     }
 
     if(incomeSource ==="" || timeEmployed === "" || timeEmployed === "" || paymentFreq === ""){
       
       setContinueCondition(false)
     }
 
 
   },
   [incomeSource,timeEmployed,inMilitary,paymentFreq])


   const back = ()=>{
    navigate(-1)
  }



  return (
    <section id='Form6'>

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
   
   
   <h2>Now a Little More...</h2>
   
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
      <input type="text" id="incomeSource" name="incomeSource"  value={incomeSource} onChange={(e)=>{setIncomeSource(e.target.value)}} /> 
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
       <input type="text" id="time_employed" name="time_employed"  value={timeEmployed} onChange={(e)=>{setTimeEmployed(e.target.value)}}/>  
      </div>
       
       
       
      </div>


    </div>


    <div className="Form6__frontend">
       
       <div className="formQuestion"> 
       <h4>How often do you get paid or receive other income? </h4>
       

       </div>

       <div className="formAnswerSingle">
      
        <div>
       <label for="payment_freq">I get paid</label>
       <input type="text" id="payment_freq" name="payment_freq"  value={paymentFreq} onChange={(e)=>{setPaymentFreq(e.target.value)}}/> 
       
       {/*<BasicSelect/>*/}
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
       <input type="radio" className='radio' name="groupMilitary"  value={inMilitary} onChange={()=>{setInMilitary("yes")}}></input>YES
       </div>

     <div className='radioCover'>
     <input type="radio" className='radio' name="groupMilitary"  value={inMilitary} onChange={(e)=>{setInMilitary("no")}}></input>NO
     </div>

    </fieldset>
       
       
      
      </div>


    </div>

    <div className = "formContinue">
   
    <button 
        disabled={!continueCondition}
        className={`btn-f ${continueCondition && `btn-primary`}`}
        onClick ={savePage6}
        >
         {loading?"...loading" :"CONTINUE"}
        </button>


       </div>

   </div>

     
     
    </section>
  )
}

export default Form6
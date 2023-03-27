import React,{useState,useEffect} from 'react'
import './form9.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import BasicSelect from './BasicSelect'
import { Link,useNavigate } from 'react-router-dom'
import {BsArrowLeftShort} from 'react-icons/bs'


const Form9 = () => {
  
  const [loading,setLoading] = useState(false)
  const [continueCondition,setContinueCondition] = useState(false)
  const [formName,setFormName] = useState('')
  const [recordedAddress,setRecordedAddress] = useState('')
  const [creditScore, setCreditScore] = useState('')

  const [carPaidOff,setCarPaidOff] = useState('')
  const [unsecuredLoans,setUnsecuredLoans] = useState('')
  
 


   const navigate = useNavigate()
  
   
   const savePage9 = () => {
    setLoading(true)
   sessionStorage.setItem("carPaidOff",carPaidOff)
   sessionStorage.setItem("unsecuredLoans",unsecuredLoans)
   sessionStorage.setItem("creditScore",creditScore)
  
   
   setLoading(false)
   setTimeout(navigate('/page10'),1500)
   }
   
   
   useEffect(()=>{
   
     /*sessionStorage.getItem("firstName") !="null" && setFormName(sessionStorage.getItem("firstName"))
     sessionStorage.getItem("address") !="null" && setRecordedAddress(sessionStorage.getItem("address"))
     sessionStorage.getItem("licenseIssuer") !="null" && setLicenseIssuer(sessionStorage.getItem("licenseIssuer"))*/

     sessionStorage.getItem("carPaidOff") !="null" && setCarPaidOff(sessionStorage.getItem("carPaidOff"))
     sessionStorage.getItem("unsecuredLoans") !="null" && setUnsecuredLoans(sessionStorage.getItem("unsecuredLoans"))
   
     sessionStorage.getItem("creditScore") !="null" && setCreditScore(sessionStorage.getItem("creditScore"))
   
   },[])
 
 
   useEffect(()=>{
     if((carPaidOff !==null||"") && (unsecuredLoans !==null|| "")   &&  (creditScore !==null|| "")){
      setContinueCondition(true)
     }
 
     if(carPaidOff ==="" || unsecuredLoans === ""  || creditScore === ""){
       
       setContinueCondition(false)
     }
 
 
   },
   [carPaidOff,unsecuredLoans,creditScore])

  
   const back = ()=>{
    navigate(-1)
  }
  
  
  
  
  
  return (
    <section id='Form9'>

<button onClick={back} 
     style={{fontSize:"1.3rem",
             fontWeight:"bold",
             position:"relative",
             left:"10%",
             display:"flex",
             display:"flex",
             justifyContent:"center",
             alignItems:"center",
             paddingBottom:"2rem",
             backgroundColor:"transparent"}}> 
             <BsArrowLeftShort/> Back
             </button>
   
   
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
       <input type="text" id="credit_score" name="credit_score" value={creditScore} style={{height:"0%", opacity:"0"}}/>
       <select value={creditScore}  onChange={(event) => setCreditScore(event.target.value)}>
                  <option value={''}>select</option>
                <option value={'excellent'}>850 -800</option>
                <option value={'good'}>799 - 670</option>
                <option value={'fair'}>669 -580</option>
                <option value={'poor'}>579 - 300</option>
                <option value={'not sure'}>not sure</option>
                  
            </select>
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
       <label for="unsecured_loans">Unsecured Debt(amount in dollars)</label>
       {/*<BasicSelect/>*/}
       <input type="text" id="unsecured_loans" name="unsecured_loans" value={unsecuredLoans} onChange={(e)=>{setUnsecuredLoans(e.target.value)}}/>
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
       <input type="radio" className='radio' name="groupCarPaidOff" onChange={()=>{setCarPaidOff("Yes and title loans")}}></input>Yes, and I want to see title loan options
       </div>

     <div className='radioCover9'>
     <input type="radio" className='radio' name="groupCarPaidOff" onChange={()=>{setCarPaidOff("Yes,but no title loans")}}></input>Yes, but don't show title loan options
     </div>

     <div className='radioCover9'>
     <input type="radio" className='radio' name="groupCarPaidOff" onChange={()=>{setCarPaidOff("No")}}></input>No, I don't own a car that is paid off
     </div>

    </fieldset>
       
      
      </div>


    </div>

    <div className = "formContinue">
    <button 
        disabled={!continueCondition}
        className={`btn-f ${continueCondition && `btn-primary`}`}
        onClick ={savePage9}
        >
         {loading?"...loading" :"CONTINUE"}
        </button>
       </div>

   </div>

     
     
    </section>
  )
}

export default Form9
import React,{useState,useEffect} from 'react'
import './form6b.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import BasicSelect from './BasicSelect'
import { Link,useNavigate } from 'react-router-dom'
import {BsArrowLeftShort} from 'react-icons/bs'


const Form6b = () => {


  const [loading,setLoading] = useState(false)
  const [continueCondition,setContinueCondition] = useState(false)
  //const [formName,setFormName] = useState('')
  const [employerName,setEmployerName] = useState('')
  const [employerPhone,setEmployerPhone] = useState('')
  const [jobTitle,setJobTitle] = useState('')

  //const [recordedAddress,setRecordedAddress] = useState('')

   const navigate = useNavigate()
  
   
   const savePage6b = () => {
    setLoading(true)
   sessionStorage.setItem("employerName",employerName)
   sessionStorage.setItem("employerPhone",employerPhone)
   sessionStorage.setItem("jobTitle",jobTitle)
   
   setLoading(false)
   setTimeout(navigate('/page7'),1500)
   }
   
   
   useEffect(()=>{
   
    
     
     sessionStorage.getItem("employerName") !="null" && setEmployerName(sessionStorage.getItem("employerName"))
     sessionStorage.getItem("employerPhone") !="null" && setEmployerPhone(sessionStorage.getItem("employerPhone"))
     sessionStorage.getItem("jobTitle") !="null" && setJobTitle(sessionStorage.getItem("jobTitle"))
   
   },[])
 
 
   useEffect(()=>{
     if((employerName !=="null"||"") && (employerPhone !=="null"|| "")  && (jobTitle!=="null"|| "") ){
      setContinueCondition(true)
     }
 
     if(employerName ==="" || employerPhone === "" || jobTitle === "" ){
       
       setContinueCondition(false)
     }
 
 
   },
   [employerName,employerPhone,jobTitle])


   const back = ()=>{
    navigate(-1)
  }



  return (
    <section id='Form6b'>

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
   
   
   <h2>Tell us More...</h2>
   
   <div className="container Form6b__container">
   
      <div className="Form6b__frontend">
       
       <div className="formQuestion"> 
       <h4>What is the name of the company you work for? </h4>
       <p>
       Our lenders and lending partners use this information to determine your eligibility and it is required by most banks. Lenders and lending partners will not use this information to contact your employer or to disclose that they are from a loan company.
       </p>

       </div>

       <div className="formAnswerSingle">
      
        <div>
       <label for="employerName">Employer name</label>
      <input type="text" id="employerName" name="employerName"  value={employerName} onChange={(event) => setEmployerName(event.target.value)} /> 

    
      </div>
       
       
       
      </div>


    </div>

     

      <div className="Form6b__frontend">
       
       <div className="formQuestion"> 
       <h4>Employer's Phone Number </h4>
       <p>
       NOTE: Employer phone number must be different from your own phone number, unless you are self employed.
       </p>

       </div>

       <div className="formAnswerSingle">
      
        <div>
       <label for="employer_phone">Employer's Phone</label>
       <input type="tel" pattern="[0-9]{3} [0-9]{3}-[0-9]{4}" id="employer_phone" name="employer_phone" placeholder="e.g (715) 354-3796"  value={employerPhone}  onChange={(event) => setEmployerPhone(event.target.value)}/>  
      
      </div>
       
       
       
      </div>


    </div>


    <div className="Form6b__frontend">
       
       <div className="formQuestion"> 
       <h4>What is your job title ? </h4>
       <p>
      Your Official title at your workplace.
       </p>

       </div>

       <div className="formAnswerSingle">
      
        <div>
       <label for="job_title">Job title</label>
       <input type="text"  id="job_title" name="job_title" placeholder="e.g marketing manager"  value={jobTitle}  onChange={(event) => setJobTitle(event.target.value)}/>  
      
      </div>
       
       
       
      </div>


    </div>


  

    <div className = "formContinue">
   
    <button 
        disabled={!continueCondition}
        className={`btn-f ${continueCondition && `btn-primary`}`}
        onClick ={savePage6b}
        >
         {loading?"...loading" :"CONTINUE"}
        </button>


       </div>

   </div>

     
     
    </section>
  )
}

export default Form6b
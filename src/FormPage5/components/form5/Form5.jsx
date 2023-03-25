import React, { useEffect, useState } from 'react'
import './form5.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import BasicSelect from './BasicSelect'
import { Link, useNavigate } from 'react-router-dom'
import {BsArrowLeftShort} from 'react-icons/bs'


const Form5 = () => {


  const [loading,setLoading] = useState(false)
  const [continueCondition,setContinueCondition] = useState(false)
  const [formName,setFormName] = useState('')
  const [lengthAtHome,setLengthAtHome] = useState('')
  const [ownsHome,setOwnsHome] = useState('')
  const [recordedAddress,setRecordedAddress] = useState('')


   const navigate = useNavigate()
  
   
   const savePage5 = () => {
    setLoading(true)
   sessionStorage.setItem("lengthAtHome",lengthAtHome)
   sessionStorage.setItem("ownsHome",ownsHome)
   
   setLoading(false)
   setTimeout(navigate('/page6'),1500)
   }
   
   
   useEffect(()=>{
   
     sessionStorage.getItem("firstName") !="null" && setFormName(sessionStorage.getItem("firstName"))
     sessionStorage.getItem("address") !="null" && setRecordedAddress(sessionStorage.getItem("address"))
     sessionStorage.getItem("lengthAtHome") !="null" && setLengthAtHome(sessionStorage.getItem("lengthAtHome"))
     sessionStorage.getItem("ownsHome") !="null" && setOwnsHome(sessionStorage.getItem("ownsHome"))
   
   },[])
 
 
   useEffect(()=>{
     if(lengthAtHome !=="null"||"" && ownsHome !=="null"|| ""){
      setContinueCondition(true)
     }
 
     if(lengthAtHome ==="" || ownsHome === ""){
       
       setContinueCondition(false)
     }
 
 
   },
   [lengthAtHome,ownsHome])
 
   const back = ()=>{
    navigate(-1)
  }

  return (
    <section id='Form5'>
   
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
   
   <h2><span style={{color:"green"}}>{formName && formName}</span>{formName && ","} we're here to help with your Loan request.</h2>
   
   <div className="container Form5__container">
   
      <div className="Form5__frontend">
       
       <div className="formQuestion"> 
       <h4>How long have you lived at <span style={{color:"grey"}}>{recordedAddress}</span> ? </h4>
      

       </div>

       <div className="formAnswerSingle">
      
        <div>
       <label for="living_length">Length at address</label>
       <input type="text" id="lengthAtAddress" name="length_at_address" value={lengthAtHome} onChange={(e)=>{setLengthAtHome(e.target.value)}}/> 
        {/*<BasicSelect/>*/}
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
       <input type="radio" className='radio' name="groupOwnhome" onChange={()=>{setOwnsHome(true)}}></input>YES
       </div>

     <div className='radioCover'>
     <input type="radio" className='radio' name="groupOwnhome" onChange={()=>{setOwnsHome(false)}}></input>NO
     </div>

    </fieldset>
   
       
      </div>


    </div>


   

    <div className = "formContinue">
    <button 
        disabled={!continueCondition}
        className={`btn-f ${continueCondition && `btn-primary`}`}
        onClick ={savePage5}
        >
         {loading?"...loading" :"CONTINUE"}
        </button>
       </div>

   </div>

     
     
    </section>
  )
}

export default Form5
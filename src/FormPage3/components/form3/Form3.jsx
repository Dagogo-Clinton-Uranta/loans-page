import React,{useState,useEffect} from 'react'
import './form3.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import BasicSelect from './BasicSelect'
import { Link,useNavigate } from 'react-router-dom'
import {BsArrowLeftShort} from 'react-icons/bs'

const Form3 = () => {


  


const [loading,setLoading] = useState(false)
const [address,setAddress] = useState('')
  const [address2,setAddress2] = useState('')
const [zip,setZip] = useState('')
const [city,setCity] = useState('')
const [stateOf,setStateOf] = useState('')

const [formName,setFormName] = useState('')



const navigate = useNavigate()
//let continueCondition = address !== null||'' && zip !==null||'' && city !==null||'' && stateOf !==null||''

const [continueCondition,setContinueCondition] = useState(false)


useEffect(()=>{
  if(address !== null||'' && zip !==null||'' && city !==null||'' && stateOf !==null||''){
    
    setContinueCondition(true)
  }

  if(address === '' || zip ==='' || city ==='' ||stateOf ===''){
    
    setContinueCondition(false)
  }


},
[address,zip,city,stateOf])

const savePage3 = () => {
 setLoading(true)
sessionStorage.setItem("address",address)
sessionStorage.setItem("address2",address2)
sessionStorage.setItem("zip",zip)
sessionStorage.setItem("city",city)
sessionStorage.setItem("stateOf",stateOf)
setLoading(false)
setTimeout(navigate('/page4'),1500)
}


useEffect(()=>{

  sessionStorage.getItem("firstName") !="null" && setFormName(sessionStorage.getItem("firstName"))
  sessionStorage.getItem("address") !="null" && setAddress(sessionStorage.getItem("address"))
  sessionStorage.getItem("address2") !="null" &&setAddress2(sessionStorage.getItem("address2"))
  sessionStorage.getItem("zip") !="null" &&setZip(sessionStorage.getItem("zip"))
  sessionStorage.getItem("city") !="null" &&setCity(sessionStorage.getItem("city"))
  sessionStorage.getItem("stateOf") !="null" &&setStateOf(sessionStorage.getItem("stateOf"))



},[])

const back = ()=>{
  navigate(-1)
}

  return (
    <section id='Form3'>

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
   
   
   <h2> <span style={{color:"green"}}>{formName != "null" && formName}</span>{formName && ","} we're here to help with your Loan request..</h2>
   
   <div className="container Form3__container">
   
      <div className="Form3__frontend">
       
       <div className="formQuestion"> 
       <h4>What is your address? </h4>
       <p>
       Lenders may use your address to help verify your identity and to help determine your loan eligibility.
    Our marketing partners may use this information to help send you offers or other messages about loans, debt relief, and other credit-related services.
       </p>

       </div>

       <div className="formAnswerSingle">
      
        <div>
       <label for="address">Address</label>
      <input type="text" id="javascript" name="address" value={address} onChange={(e)=>{setAddress(e.target.value)}}/> 
      </div>
       
       
        <div>
      <label for="address_2">Address line 2 (Optional)</label>
      <input type="text" id="javascript" name="address_2" value={address2} onChange={(e)=>{setAddress2(e.target.value)}} />
      </div>

      <div>
      <label for="zip_code">Zip Code</label>
      <input type="text" id="javascript" name="zip code" value={zip} onChange={(e)=>{setZip(e.target.value)}}/>
      </div>

      <div>
      <label for="city">City</label>
      <input type="text" id="javascript" name="city" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
      </div>


      <div>
      <label for="state">State</label>
      <input type="text" id="javascript" name="state" value={stateOf} onChange={(e)=>{setStateOf(e.target.value)}}/>
      </div>


      </div>


    </div>

  


    <div className = "formContinue">
    <button 
        disabled={!continueCondition}
        className={`btn-f ${continueCondition && `btn-primary`}`}
        onClick ={savePage3}
        >
         {loading?"...loading" :"CONTINUE"}
        </button>

       </div>

   </div>

     
     
    </section>
  )
}

export default Form3
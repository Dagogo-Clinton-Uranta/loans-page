import React,{useState,useEffect} from 'react'
import './form11.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import BasicSelect from './BasicSelect'
import samplerouting from './samplerouting.png'
import { Link,useNavigate } from 'react-router-dom'
import {BsArrowLeftShort} from 'react-icons/bs'


const Form11 = () => {

  const [loading,setLoading] = useState(false)
  const [continueCondition,setContinueCondition] = useState(false)

 const [accountNumber,setAccountNumber] = useState('')
 const [routingNumber,setRoutingNumber] = useState('')
const navigate = useNavigate()

const back = ()=>{
  navigate(-1)
}


 useEffect(()=>{
   
  /*sessionStorage.getItem("firstName") !="null" && setFormName(sessionStorage.getItem("firstName"))
  sessionStorage.getItem("address") !="null" && setRecordedAddress(sessionStorage.getItem("address"))
  sessionStorage.getItem("licenseIssuer") !="null" && setLicenseIssuer(sessionStorage.getItem("licenseIssuer"))*/

  sessionStorage.getItem("accountNumber") !="null" && setAccountNumber(sessionStorage.getItem("accountNumber"))
  sessionStorage.getItem("routingNumber") !="null" && setRoutingNumber(sessionStorage.getItem("routingNumber"))


},[])


useEffect(()=>{
  if((accountNumber !==null|| "")   &&  (routingNumber !==null|| "")){
   setContinueCondition(true)
  }

  if(accountNumber ==="" || routingNumber === ""){
    
    setContinueCondition(false)
  }


},
[accountNumber,routingNumber])

 const pushToApi = () => {
  setLoading(true)
 

 
 setLoading(false)

 }


  return (
    <section id='Form11'>

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
   
   <h2>Alexander, we have several partners interested in providing you funding.</h2>
   
   <div className="container Form11__container">
   
      <div className="Form11__frontend">
       
       <div className="formQuestion"> 
       <h4>Submit below to complete your loan request. </h4>
       <p>
       We have additional lenders and lending partners that
        may still offer you a loan of $1500 or under. These 
        loan amounts, interest rates and repayment terms may 
        differ from what is listed on our site.
       </p>

       </div>

     


    </div>


    <div className="Form11__frontend">
       
       <div className="formQuestion"> 
       <h4>Other credit-related offers</h4>
      
       </div>

       <div className="formAnswerSingle">
      
        <div>
       <label for="routing_number">ABA/Routing Number</label>
      <input type="text" id="routing_number" name="routing_number" value={routingNumber} onChange={(e)=>{setRoutingNumber(e.target.value);sessionStorage.setItem("routingNumber",e.target.value)}}/> 
      </div>
       
       
        <div>
      <label for="account_number">Account Number</label>
      <input type="text" id="account_number" name="account_number" value={accountNumber} onChange={(e)=>{setAccountNumber(e.target.value);sessionStorage.setItem("accountNumber",e.target.value)}}/>
      </div>
      </div>


    </div>


    <div   className = "formContinue">
        <img style={{width:"100%"}} src={samplerouting} alt="smaple routing number and account number" />
       </div>



    <div className = "formContinue" >
    <button 
        disabled={!continueCondition}
        className={`btn-f ${continueCondition && `btn-primary`}`}
        onClick ={pushToApi}
        >
         {loading?"...loading" :"SUBMIT"}
        </button>
       </div>

   </div>

     
     
    </section>
  )
}

export default Form11
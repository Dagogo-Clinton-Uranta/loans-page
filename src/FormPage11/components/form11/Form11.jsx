import React,{useState,useEffect} from 'react'
import './form11.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import BasicSelect from './BasicSelect'
import samplerouting from './samplerouting.png'
import { Link,useNavigate } from 'react-router-dom'
import {BsArrowLeftShort} from 'react-icons/bs'
import axios from 'axios'


const Form11 = () => {

  const [loading,setLoading] = useState(false)
  const [continueCondition,setContinueCondition] = useState(false)
  const [formName,setFormName] = useState('')
  const [responseMessage,setResponseMessage] = useState([])
  const [responseNoLead,setResponseNoLead] = useState(false)

 const [accountNumber,setAccountNumber] = useState('')
 const [routingNumber,setRoutingNumber] = useState('')
 const [ipAddress,setIpAddress] = useState('')
 const [formFilled,setFormFilled] = useState(true)
const navigate = useNavigate()

const back = ()=>{
  navigate(-1)
}


var config = {
  headers: {'Access-Control-Allow-Origin': '*'},
    crossdomain: true,
    withCredentials: false,
};


const payloadPre11 = {

  username:"ImmenseHub"     ,   
  apikey:"7cd0a2eb6ef5a68811d45e7ff76cedf1e0d4eafe"       ,
  campaignId:"1234"   ,
  ip_address: ipAddress  ,
  agent:`${navigator.userAgent}` ,
  min_price: '20'    ,
  amount:  sessionStorage.getItem("loanAmount")      ,
  fName:  sessionStorage.getItem("firstName")         ,
  lName:  sessionStorage.getItem("lastName")        ,
  zip:  sessionStorage.getItem("zip")          ,
  city:  sessionStorage.getItem("city")         ,
  state:  sessionStorage.getItem("stateOf")        ,
  address:  sessionStorage.getItem("address")      ,
  lengthAtAddress: sessionStorage.getItem("lengthAtHome"),
  licenseState:  sessionStorage.getItem("licenseIssuer") ,
  email:  sessionStorage.getItem("email")        ,
  license:  sessionStorage.getItem("licenseId")      ,
  rentOwn:  sessionStorage.getItem("ownsHome")    ,
  phone:  sessionStorage.getItem("phoneNumber")       ,
  workPhone:  sessionStorage.getItem("employerPhone")    ,
  callTime: "anytime"      ,
  bMonth:  new Date(sessionStorage.getItem("dob")).getMonth()+1     ,           
  bDay:  new Date(sessionStorage.getItem("dob")).getDate()       ,           
  bYear: new Date(sessionStorage.getItem("dob")).getFullYear()      ,           
  ssn:  sessionStorage.getItem("ssn")          ,      
  armedForces:  sessionStorage.getItem("inMilitary")  ,
  incomeSource:  sessionStorage.getItem("incomeSource") ,
  employerName: sessionStorage.getItem("employerName"),   
  timeEmployed:  sessionStorage.getItem("timeEmployed") ,
  employerPhone:  sessionStorage.getItem("phoneNumber"),   
  jobTitle: sessionStorage.getItem("jobTitle")    ,  
  paidEvery:  sessionStorage.getItem("paymentFreq")    ,
  nextPayday: sessionStorage.getItem("nextPayday")   ,  
  secondPayday:  sessionStorage.getItem("nextPayday"), 
  accountType:  sessionStorage.getItem("bankAccount")   ,
  //bankName: "JP Morgan"     ,   //dont have
  //bankPhone:  "(605) 964-2306"     ,  //dont have
  monthsBank:  sessionStorage.getItem("timeAtBank")    ,
  directDeposit:  "yes",  //dont have
  monthlyNetIncome:  sessionStorage.getItem("monthlyIncome"), 
  ownCar:  sessionStorage.getItem("carPaidOff")       ,
  note:  sessionStorage.getItem("firstName")         ,
  websiteName:  "https://www.poorcreditquickloans.com"  ,
  timeout: 600     ,
  lead_type:  "personalloan"    ,
  loan_reason:  sessionStorage.getItem("loanReason")  , 
  credit_type:  sessionStorage.getItem("creditScore")  ,
  /*atrk:  sessionStorage.getItem("firstName")        ,*/ 
  unsecuredDebt:  sessionStorage.getItem("unsecuredLoans")
      }


   
const payload = {

  username:"ImmenseHub"     ,   
  apikey:"7cd0a2eb6ef5a68811d45e7ff76cedf1e0d4eafe"       ,
  campaignId:"1234"   ,
  ip_address: ipAddress  ,
  agent:`${navigator.userAgent}` ,
  min_price: '2'    ,
  amount:  sessionStorage.getItem("loanAmount")      ,
  fName:  sessionStorage.getItem("firstName")         ,
  lName:  sessionStorage.getItem("lastName")        ,
  zip:  sessionStorage.getItem("zip")          ,
  city:  sessionStorage.getItem("city")         ,
  state:  sessionStorage.getItem("stateOf")        ,
  address:  sessionStorage.getItem("address")      ,
  lengthAtAddress: sessionStorage.getItem("lengthAtHome"),
  licenseState:  sessionStorage.getItem("licenseIssuer") ,
  email:  sessionStorage.getItem("email")        ,
  license:  sessionStorage.getItem("licenseId")      ,
  rentOwn:  sessionStorage.getItem("ownsHome")    ,
  phone:  sessionStorage.getItem("phoneNumber")       ,
  workPhone:  sessionStorage.getItem("employerPhone")    ,
  callTime: "anytime"      ,
  bMonth:  new Date(sessionStorage.getItem("dob")).getMonth()+1     ,           
  bDay:  new Date(sessionStorage.getItem("dob")).getDate()       ,           
  bYear: new Date(sessionStorage.getItem("dob")).getFullYear()      ,           
  ssn:  sessionStorage.getItem("ssn")          ,      
  armedForces:  sessionStorage.getItem("inMilitary")  ,
  incomeSource:  sessionStorage.getItem("incomeSource") ,
  employerName: sessionStorage.getItem("employerName"),   
  timeEmployed:  sessionStorage.getItem("timeEmployed") ,
  employerPhone:  sessionStorage.getItem("phoneNumber"),   
  jobTitle: sessionStorage.getItem("jobTitle")    ,  
  paidEvery:  sessionStorage.getItem("paymentFreq")    ,
  nextPayday: sessionStorage.getItem("nextPayday")   ,  
  secondPayday:  sessionStorage.getItem("nextPayday"), 
  abaNumber: /*"021000021"*/sessionStorage.getItem("routingNumber")  ,
  accountNumber:  sessionStorage.getItem("accountNumber"),
  accountType:  sessionStorage.getItem("bankAccount")   ,
  //bankName: "JP Morgan"     ,   //dont have
  //bankPhone:  "(605) 964-2306"     ,  //dont have
  monthsBank:  sessionStorage.getItem("timeAtBank")    ,
  directDeposit:  "yes",  //dont have
  monthlyNetIncome:  sessionStorage.getItem("monthlyIncome"), 
  ownCar:  sessionStorage.getItem("carPaidOff")       ,
  note:  sessionStorage.getItem("firstName")         ,
  websiteName:  "https://www.poorcreditquickloans.com"  ,
  timeout: 600     ,
  lead_type:  "personalloan"    ,
  loan_reason:  sessionStorage.getItem("loanReason")  , 
  credit_type:  sessionStorage.getItem("creditScore")  ,
  /*atrk:  sessionStorage.getItem("firstName")        ,*/ 
  unsecuredDebt:  sessionStorage.getItem("unsecuredLoans")
      }


const url = "https://poorcred-helperse-api.herokuapp.com/api/orders/"


 useEffect(()=>{
   
 sessionStorage.getItem("firstName") !="null" && setFormName(sessionStorage.getItem("firstName"))

  sessionStorage.getItem("accountNumber") !="null" && setAccountNumber(sessionStorage.getItem("accountNumber"))
  sessionStorage.getItem("routingNumber") !="null" && setRoutingNumber(sessionStorage.getItem("routingNumber"))


},[])


useEffect(()=>{


 /* Object.values(payloadPre11).forEach(
    (val) => {
      if (val === null || val === ''){
        setFormFilled(false)
      }
    }
    );*/


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
 
  
   

/*if(!formFilled){
  window.alert("You still have missing fields! please fill any space left in this form and try again")
}*/
   /*else{*/
    try{
      setLoading(true);

     axios.post(url,payload,config) 
     
       .then((result) => {
          
          setLoading(false);
            console.log("THE LOANS LEAD HAS COME BACK FROM THE DATABASE !...",result.data)
          if( result.data.Messages){ setResponseMessage(result.data.Messages)}

           if( result.data.Status == "Rejected"){
             setResponseNoLead(true)
             console.log(result.data)
          }
          
           else if(result.data.Status === "Sold"){
           
          
             window.open(result.data.Redirect, "_self")

           
           }
  
        
        })
    
   }
    catch(error){
      setLoading(false)
      var errorMessage = error.message;
      console.log('Error sending tp API:', errorMessage);
      //console.log('RESPONSE IS:',res)
     /* res.status(404)*/
      throw new Error('Something went wrong when fetching from test API')
  };
/*}*/
 

 }

 useEffect(()=>{

  try{
    

   axios.get(url,config) 
  
     .then((result) => {
    
          console.log("result ARE AS FOLLOWS...",result.data)
         setIpAddress(result.data.ipAddress)
      })
    

 }
  catch(error){
    
    var errorMessage = error.message;
    console.log('Error sending to Dagogo API:', errorMessage);
    //console.log('RESPONSE IS:',res)
   /* res.status(404)*/
    throw new Error('Something went wrong when fetching from DAGOGO test API')
};

    
 },[])


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
   
   <h2><span style={{color:"green"}}>{formName && formName}</span>{formName && ","}  we have several partners interested in providing you funding.</h2>
   
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
      <input type="number" placeholder="e.g 020010394" id="routing_number" name="routing_number"  pattern="[0-9]{1}[0-9]{8}" value={routingNumber} onChange={(e)=>{setRoutingNumber(e.target.value);sessionStorage.setItem("routingNumber",e.target.value)}}/> 
      </div>
       
       
        <div>
      <label for="account_number">Account Number</label>
      <input type="text" placeholder="e.g 020010394" id="account_number" name="account_number" minlength="6"  value={accountNumber} onChange={(e)=>{setAccountNumber(e.target.value);sessionStorage.setItem("accountNumber",e.target.value)}}/>
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
       // onClick ={pushToApi}
        >
         {loading?"...loading" :"SUBMIT"}
        </button>
       </div>

   </div>
   {responseMessage && responseMessage.length && responseMessage.length > 0 && 
     
     <center style={{marginTop:"2rem"}}>
        <h4 style={{color:"red",marginBottom:"2rem"}}>Please Attend to the following fields and re-submit:</h4>
    
       {responseMessage && responseMessage.length && responseMessage.length >0 &&
        responseMessage.map((item)=>(
        
        <p>{item}</p>
      ))}
   
     
     
     </center>
    }

{responseNoLead && 
     
     <center style={{marginTop:"2rem"}}>
        <h4 style={{color:"red",marginBottom:"2rem"}}>We are sorry to disappoint you, but we have no loans available at the moment, please try again later!</h4>

     </center>
    }
     
     
    </section>
  )
}

export default Form11
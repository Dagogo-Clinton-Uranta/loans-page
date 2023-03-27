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
const navigate = useNavigate()

const back = ()=>{
  navigate(-1)
}


var config = {
  headers: {'Access-Control-Allow-Origin': '*'},
    crossdomain: true,
    withCredentials: false,
};

//const url = "https://api.itmedia.xyz/post/testxml/api/v2"
//const url = "http://localhost:5000/api/orders/"
const url = "/api/orders/"


 useEffect(()=>{
   
 sessionStorage.getItem("firstName") !="null" && setFormName(sessionStorage.getItem("firstName"))
  /*sessionStorage.getItem("address") !="null" && setRecordedAddress(sessionStorage.getItem("address"))
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
 
  
   
   
    const payload = {

username:"ImmenseHub"     ,   
apikey:"7cd0a2eb6ef5a68811d45e7ff76cedf1e0d4eafe"       ,
campaignId:""   ,
ip_address: ipAddress  ,
agent:`${navigator.userAgent}` ,
min_price: '20'    ,
amount:  '5000'       ,
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
rentOwn:  'rent'/*sessionStorage.getItem("ownsHome") */    ,
phone:  sessionStorage.getItem("phoneNumber")       ,
workPhone:  sessionStorage.getItem("phoneNumber")    ,
callTime: "anytime"      ,
bMonth:  new Date(sessionStorage.getItem("dob")).getMonth()+1     ,           
bDay:  new Date(sessionStorage.getItem("dob")).getDate()       ,           
bYear: 1995 /*new Date(sessionStorage.getItem("dob")).getFullYear() */      ,           
ssn:  sessionStorage.getItem("ssn")          ,      
armedForces:  sessionStorage.getItem("inMilitary")  ,
incomeSource:  sessionStorage.getItem("incomeSource") ,
employerName:  "Meta",    // DONT HAVE
timeEmployed:  sessionStorage.getItem("timeEmployed") ,
employerPhone:  sessionStorage.getItem("phoneNumber"),    //DONT HAVE
jobTitle:  "software developer"    ,   //dont have
paidEvery:  sessionStorage.getItem("paymentFreq")    ,
nextPayday:  "28-03-2023"   ,  //dont have
secondPayday:  "14-04-2023" ,   //dont have
abaNumber: "021000021" /*sessionStorage.getItem("routingNumber")  */  ,
accountNumber:  sessionStorage.getItem("accountNumber"),
accountType:  sessionStorage.getItem("bankAccount")   ,
bankName: "JP Morgan"     ,   //dont have
bankPhone:  "(605) 964-2306"     ,  //dont have
monthsBank:  sessionStorage.getItem("timeAtBank")    ,
directDeposit:  "yes",  //dont have
monthlyNetIncome:  "2750", //dont have
ownCar: "yes" /*sessionStorage.getItem("carPaidOff")*/        ,
note:  sessionStorage.getItem("firstName")         ,
websiteName:  "https://www.poorcreditquickoans.com"  ,
timeout: 600     ,
lead_type:  "personalloan"    ,
loan_reason:  "debtConsolidation"/*sessionStorage.getItem("loanReason")*/   , 
credit_type:  sessionStorage.getItem("creditScore")  ,
/*atrk:  sessionStorage.getItem("firstName")        ,*/ 
unsecuredDebt:  sessionStorage.getItem("unsecuredLoans")
    }
  
    
    try{
      setLoading(true);

     axios.post(url,payload,config) 
     
       .then((result) => {
          
          setLoading(false);
            console.log("THE LOANS LEAD HAS COME BACK FROM THE DATABASE !...",result.data)
           if( result.data.Messages){ setResponseMessage(result.data.messages)}

           if( result.data.Status == "Rejected"){ setResponseNoLead(true)}
          
           else if(result.data.Status === "Sold"){
             //window.open(result.data.Redirect, "_self");
             window.open("https://topfiveoffers.com/?aid=8494208490233&note=5001&fwd_aid=5001", "_self")
           }
         
        
        })
      

   }
    catch(error){
      setLoading(false)
      var errorMessage = error.message;
      console.log('Errorsending tp API:', errorMessage);
      //console.log('RESPONSE IS:',res)
     /* res.status(404)*/
      throw new Error('Something went wrong when fetching from test API')
  };
 
 

 }

 useEffect(()=>{

  try{
    

   axios.get(url,config) 
  
     .then((result) => {
    
          console.log("result ARE AS FOLLOWS...",result.data)
         
         // window.open(result?.url, "_self");
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
   {responseMessage.length > 0 && 
     
     <center style={{marginTop:"2rem"}}>
        <h4 style={{color:"red",marginBottom:"2rem"}}>Please Attend to the following fields and re-submit:</h4>
    
       { responseMessage.length >0 &&
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
import React,{useState,useEffect} from 'react'
import './form10.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import BasicSelect from './BasicSelect'
import { Link ,useNavigate} from 'react-router-dom'
import {BsArrowLeftShort} from 'react-icons/bs'


const Form10 = () => {

  const [loading,setLoading] = useState(false)
  const [continueCondition,setContinueCondition] = useState(false)
  const [formName,setFormName] = useState('')
  const [recordedAddress,setRecordedAddress] = useState('')
 
  const [additionalLenders, setAdditionalLenders] = useState(false)
  const [creditOffers,setCreditOffers] = useState(false)
  const [agreeConsent,setAgreeConsent] = useState(false)
  

   
   const savePage10= () => {
    setLoading(true)
   sessionStorage.setItem("creditOffers",creditOffers)
   sessionStorage.setItem("agreeConsent",agreeConsent)
   sessionStorage.setItem("additionalLenders",additionalLenders)
  
   
   setLoading(false)
   setTimeout(navigate('/page11'),1500)
   }
   
   
   useEffect(()=>{
   
     /*sessionStorage.getItem("firstName") !="null" && setFormName(sessionStorage.getItem("firstName"))
     sessionStorage.getItem("address") !="null" && setRecordedAddress(sessionStorage.getItem("address"))
     sessionStorage.getItem("licenseIssuer") !="null" && setLicenseIssuer(sessionStorage.getItem("licenseIssuer"))*/

     sessionStorage.getItem("creditOffers") !="null" && setCreditOffers(sessionStorage.getItem("creditOffers"))
     sessionStorage.getItem("agreeConsent") !="null" && setAgreeConsent(sessionStorage.getItem("agreeConsent"))
   
     sessionStorage.getItem("additionalLenders") !="null" && setAdditionalLenders(sessionStorage.getItem("additionalLenders"))
   
   },[])
 
 
   useEffect(()=>{
     if((creditOffers) && (agreeConsent)   &&  (additionalLenders )){
      setContinueCondition(true)
     }
 
     if(!creditOffers || !agreeConsent || !additionalLenders ){
       
       setContinueCondition(false)
     }
 
 
   },
   [creditOffers,agreeConsent,additionalLenders])

  

 const navigate = useNavigate()
  const back = ()=>{
    navigate(-1)
  }
 
 
  return (
    <section id='Form10'>
   
   <button onClick={back} 
     style={{fontSize:"1.3rem",
             fontWeight:"bold",
             position:"relative",
             left:"10%",
             paddingBottom:"2rem",
             backgroundColor:"transparent"}}> 
             <BsArrowLeftShort/> Back
             </button>
   
   <h2>Last questions, almost done!</h2>
   
   <div className="container Form10__container">
   
      <div className="Form10__frontend">
       
       <div className="formQuestion"> 
       <h4>Access to additional lenders </h4>
       </div>

       <div className="formAnswerSingle">
      
       <div className='radioCover9'>
     <input type="checkbox" className='radio' name="additionalLenders" onChange={()=>{setAdditionalLenders(!additionalLenders)}}></input>Yes, accept additional lenders
     </div>
         <p>Accessing our extended network of additional lenders may increase 
          your chances of receiving a loan offer because more lenders will 
          see your request. The extended network includes the PersonalLoans.com 
          network of lenders and also third party lender networks that have access 
          to additional lenders. The other lender networks and additional lenders
           will see your information. Learn more here.
           </p>
      
      </div>


    </div>

      <hr />

      <div className="Form10__frontend">
       
       <div className="formQuestion"> 
       <h4>Other credit-related offers </h4>
      
       </div>

       <div className="formAnswerSingle">
      
       <div className='radioCover9'>
     <input type="checkbox" className='radio' name="otherOffers" onChange={()=>{setCreditOffers(!creditOffers)}}></input>Yes, other credit-related offers
     </div>
       
       <p>
       You will receive additional offers that you may find helpful
        even if no lender offers you a loan. This includes offers for 
        loans, debt relief, banking, credit repair, credit monitoring,
         or other credit-related offers. We may share your contact information
          so they can make you an offer or send you a message. These other
           offers help us make a financial profit off of our free service. Learn more here.
       </p>
       
       
      </div>


    </div>


    <div className="Form10__frontend">
       
       <div className="formQuestion"> 
       <h4>Required Authorizations </h4>
       <p>
       We are required by law to obtain these authorizations from you before you can use our service.
       </p>


       </div>

       <div className="formAnswerSingle">
      
       <div className='radioCover9'>
     <input type="checkbox" className='radio' name="iAgree" onChange={()=>{setAgreeConsent(!agreeConsent)}}></input>I agree
     </div>
       
       <p>
       By checking the box, I authorize this site to share all of my information with its Lending Partners to process my loan inquiry, as described in more detail in the Ad Disclosure & Privacy Policy.
This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
By clicking "Submit", you agree as follows:
I confirm that I have read, understood, and agree to the Ad Disclosure, Privacy Policy, Terms of Use, E-Consent, and Credit Authorization.
I authorize PersonalLoans.com to use my information to create an account that will allow me to more easily submit future loan inquiries on this site and its affiliated sites.
       </p>
       
       
      </div>


    </div>

    <div className = "formContinue">
    <button 
        disabled={!continueCondition}
        className={`btn-f ${continueCondition && `btn-primary`}`}
        onClick ={savePage10}
        >
         {loading?"...loading" :"CONTINUE"}
        </button>
       </div>

   </div>

     
     
    </section>
  )
}

export default Form10
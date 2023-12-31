import React,{useState,useEffect} from 'react'
import './form2.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import BasicSelect from './BasicSelect'
import { Link, useNavigate } from 'react-router-dom'
import {BsArrowLeftShort} from 'react-icons/bs'


const Form2 = () => {

const [loading,setLoading] = useState(false)
const [firstName,setFirstName] = useState('')
const [lastName,setLastName] = useState('')
const [dob,setDob] = useState('')
const [loanReason,setLoanReason] = useState('')
const [loanAmount,setLoanAmount] = useState(0)
const navigate = useNavigate()

function callbackFunction(data) {
  setLoanReason(data);
    }

const savePage2 = () => {
 setLoading(true)
sessionStorage.setItem("firstName",firstName)
sessionStorage.setItem("lastName",lastName)
sessionStorage.setItem("dob",dob)
sessionStorage.setItem("loanReason",loanReason)
sessionStorage.setItem("loanAmount",loanAmount)
setLoading(false)

setTimeout(navigate('/page3'),1500)
}

const [continueCondition,setContinueCondition] = useState(false)

const adultMin = (new Date(new Date().setFullYear(new Date().getFullYear()-18))).toISOString().slice(0, 10)


useEffect(()=>{
  if(firstName !== null||'' && lastName !==null||'' && dob !==null||'' && loanReason !==null||''&& loanAmount !==null||''){
    
    setContinueCondition(true)
  }

  if(firstName === '' || lastName ==='' || dob ==='' ||loanReason ===''&& loanAmount !==null||''){
    
    setContinueCondition(false)
  }


},
[firstName,lastName,dob,loanReason,loanAmount])

useEffect(()=>{

  sessionStorage.getItem("firstName")!="null" &&   setFirstName(sessionStorage.getItem("firstName"))
  sessionStorage.getItem("lastName")!="null" &&  setLastName(sessionStorage.getItem("lastName"))
  sessionStorage.getItem("dob")!="null" &&  setDob(sessionStorage.getItem("dob"))
  sessionStorage.getItem("loanReason")!="null" && setLoanReason(sessionStorage.getItem("loanReason"))
  sessionStorage.getItem("loanAmount")!="null" && setLoanAmount(sessionStorage.getItem("loanAmount"))

console.log("STORED VALUES ARE ", firstName,lastName,dob,loanReason,loanAmount)

},[])

const back = ()=>{
  navigate(-1)
}

  return (
    <section id='Form2'>
   

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
   
   <h2>First We'll want to know a little bit about you...</h2>
   
   <div className="container Form2__container">
   
      <div className="Form2__frontend">
       
       <div className="formQuestion"> 
       <h4>What is your name? </h4>
       <p>
       Providing accurate information allows lenders and lending partners to customize your loan offer and gives you the best chance of being approved.
       We may also share this information with our marketing partners so they can send you offers or other messages about loans, debt relief, and other credit-related services.
       </p>

       </div>

       <div className="formAnswer">
      
        <div>
       <label for="first name">First Name</label>
      <input type="text" id="javascript" name="fav_language" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/> 
      </div>
       
       
        <div>
      <label for="last name">Last Name</label>
      <input type="text" id="javascript" name="fav_language" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
      </div>
      </div>


    </div>

      

      <div className="Form2__frontend">
       
       <div className="formQuestion"> 
       <h4>What is your date of birth? </h4>
       <p>
       Our lenders may use your date of birth to verify your identity and evaluate your loan inquiry.
       </p>

       </div>

       <div className="formAnswerSingle">
      
        <div>
       <label for="dob">Date of Birth (18 and above)</label>
       <input type="date" id="dob" name="dob" max={adultMin} value={dob} onChange={(e)=>setDob(e.target.value)}/>  
      </div>
       
       
       
      </div>


    </div>

    <div className="Form2__frontend">
       
       <div className="formQuestion"> 
       <h4>How much do you want to borrow ? </h4>
       

       </div>

       <div className="formAnswerSingle">
      
        <div>
       <label for="loanAmount">Loan Amount ($)</label>
       <input type="number" id="loanAmount" name="loanAmount" max={adultMin} value={loanAmount} onChange={(e)=>setLoanAmount(e.target.value)}/>  
      </div>
       
       
       
      </div>


    </div>


    <div className="Form2__frontend">
       
       <div className="formQuestion"> 
       <h4>What is the loan Reason? </h4>
       <p>
       Please let us know what you plan to use your loan for.
       </p>

       </div>

       <div className="formAnswer">
      
        <div>
       <label for="first name">Loan Reason</label>

       <input type="text" id="javascript" name="fav_language" value={loanReason} style={{opacity:"0",height:"0%"}} />
       <select value={loanReason}  onChange={(event) => setLoanReason(event.target.value)}>
                  <option value={''}>select</option>
                <option value={'debtConsolidation'}>debt consolidation</option>
                <option value={'emergencySituation'}>emergency situation</option>
                <option value={'autoRepair'}>autoRepair</option>
                <option value={'autoPurchase'}>auto purchase</option>
                <option value={'moving'}>moving</option>
                <option value={'homeImprovement'}>home improvement</option>
                <option value={'medical'}>medical</option>
                <option value={'business'}>busines</option>
                <option value={'vacation'}>vacation</option>
                <option value={'rentOrMortgage'}>rent or mortgage</option>
                <option value={'wedding'}>wedding</option>
                <option value={'majorPurchase'}>major purchase</option>
                <option value={'other'}>other</option>
              
            </select>
      </div>
       
       
      
      </div>


    </div>

    <div className = "formContinue">
   
        <button 
        disabled={!continueCondition}
        className={`btn-f ${continueCondition && `btn-primary`}`}
        onClick ={savePage2}
        >
         {loading?"...loading" :"CONTINUE"}
        </button>
      
    </div>
      

   </div>

     
     
    </section>
  )
}

export default Form2
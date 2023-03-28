import React,{useState,useEffect} from 'react'
import './form6a.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import BasicSelect from './BasicSelect'
import { Link,useNavigate } from 'react-router-dom'
import {BsArrowLeftShort} from 'react-icons/bs'


const Form6a = () => {


  const [loading,setLoading] = useState(false)
  const [continueCondition,setContinueCondition] = useState(false)
  const [formName,setFormName] = useState('')
  const [monthlyIncome,setMonthlyIncome] = useState('')
  const [nextPayday,setNextPayday] = useState('')
  const[payDate,setPayDate] = useState(new Date())
  const [recordedAddress,setRecordedAddress] = useState('')
  

   const navigate = useNavigate()
  
   
   const savePage6a = () => {
    setLoading(true)
   sessionStorage.setItem("monthlyIncome",monthlyIncome)
   sessionStorage.setItem("nextPayday",nextPayday)
   sessionStorage.setItem("payDate",payDate)
   
   
   setLoading(false)
   setTimeout(navigate('/page6b'),1500)
   }
   
   
   useEffect(()=>{
   
     sessionStorage.getItem("firstName") !="null" && setFormName(sessionStorage.getItem("firstName"))
     sessionStorage.getItem("address") !="null" && setRecordedAddress(sessionStorage.getItem("address"))

     sessionStorage.getItem("monthlyIncome") !="null" && setMonthlyIncome(sessionStorage.getItem("monthlyIncome"))
     sessionStorage.getItem("nextPayday") !="null" && setNextPayday(sessionStorage.getItem("nextPayday"))
     sessionStorage.getItem("payDate") !="null" && setNextPayday(sessionStorage.getItem("payDate"))

     console.log("the payday format is NOWF:",nextPayday)
   },[])
 
 
   useEffect(()=>{
     if((monthlyIncome !=="null"||"") && (nextPayday !=="null"|| "") ){
      setContinueCondition(true)
     }
 
     if(monthlyIncome ==="" || nextPayday === "" ){
       
       setContinueCondition(false)
     }
 
 
   },
   [monthlyIncome,nextPayday])


   const back = ()=>{
    navigate(-1)
  }



  return (
    <section id='Form6a'>

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
   
   <div className="container Form6a__container">
   
      <div className="Form6a__frontend">
       
       <div className="formQuestion"> 
       <h4>What is your monthly income? </h4>
       <p>
       Income includes wages, retirement, investments, and rental properties.
        Alimony, child support, and separate maintenance income do not need 
        to be included if you do not want it to be considered as a basis for
         repayment for the lender's loan offer that you may be connected with.
       </p>

       </div>

       <div className="formAnswerSingle">
      
        <div>
       <label for="monthlyIncome">Monthly Income($)</label>
      <input type="number" min="200" id="monthlyIncome" name="monthlyIncome"  value={monthlyIncome} onChange={(event) => setMonthlyIncome(event.target.value)} /> 

    
      </div>
       
       
       
      </div>


    </div>

      <hr />

      <div className="Form6a__frontend">
       
       <div className="formQuestion"> 
       <h4>When is your next payday? </h4>
       <p>
       If you receive benefits, alimony, or other non-employment income, use the day that you will next receive that type of income
       </p>

       </div>

       <div className="formAnswerSingle">
      
        <div>
       <label for="next_payday">Next Payday</label>
       <input type="date" id="next_payday" name="next_payday"  value={payDate} min={new Date().toISOString().slice(0, 10)} onChange={(event) => {setNextPayday(new Date(event.target.value).toLocaleDateString().replaceAll('/','-'));setPayDate(event.target.value)}}/>  
      
      </div>
       
       
       
      </div>


    </div>


  

    <div className = "formContinue">
   
    <button 
        disabled={!continueCondition}
        className={`btn-f ${continueCondition && `btn-primary`}`}
        onClick ={savePage6a}
        >
         {loading?"...loading" :"CONTINUE"}
        </button>


       </div>

   </div>

     
     
    </section>
  )
}

export default Form6a
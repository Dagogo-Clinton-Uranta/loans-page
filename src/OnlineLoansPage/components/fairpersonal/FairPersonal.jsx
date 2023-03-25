import React from 'react'
import './fairpersonal.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import fairpersonal from '../../assets/fairpersonal.jpg'
import { Link } from 'react-router-dom'


const FairPersonal = () => {
  return (
    <section id='fairpersonal'>
   
  
   
   <div className="container fairpersonal__container">
   
      <div className="fairpersonal__frontend">
      
      <h2>Find Fair Personal Loans for Bad Credit</h2>
       <p>
       Learning how to get a loan with bad credit is the first step; now it’s time to use the tips we provided to see if you qualify for a personal loan.
       Learn more about the ins and outs of personal loans for bad credit, or submit a request for a personal loan right now, so you don’t have to put your life on hold.

       </p>
  
       
       <Link to= {'/page2'}>
       <button className='btn btn-primary'>Get Started</button>
       </Link>
      </div>

       <div className="fairpersonal__backend">
       <img src={fairpersonal}  style={{height:"25rem",objectPosition:"50% 60%"}} alt="fair personal loans" />
       </div>
      

   </div>

     
    
    </section>
  )
}

export default FairPersonal
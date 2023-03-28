import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import {Link} from 'react-router-dom'

const Experience = () => {
  return (
    <section id='experience'>
   
   <h2>Your strategy for obtaining the funds you require</h2>
   
   <div className="container experience__container">
   
      <div className="experience__frontend">
       <h3>Our service is free to use</h3>
       <p>
         No extra costs. No up-front expenses. There is none. Before accepting any 
         money, review your loan offer.
         Review Rates & Fees and Terms of Use for more information.
       </p>
  
       
      </div>

       <div className="experience__backend">
       <h3>Get funding fast, directly to your account</h3>
      
       <p>
       You can quickly connect with funding opportunities by filling
        out our simple online form.
       If accepted, you could have your money as soon as the following
        working day.
       </p>
       </div>

       <div className="experience__backend">
       <h3>Request a loan for any occasion</h3>
      
         <p>
          You can use Poorcredit, QuickLoans  for everything that comes your way.
           Whether you need money for an emergency,
           home improvement, new business venture, unanticipated payment,
            or family vacation, we can help you.
        </p>

       </div>

       <div className="experience__backend">
       <h3>Competitive Rates Available</h3>
       <p>
       In our network and the various third-party lender
        networks we use, there are a wide range of lenders. 
        Some of these lenders might provide rates that are reasonable.
        Learn more about our Responsibility Pledge and How It Works.
       </p>
  
       </div>

       <div className="experience__backend">
       <h3>Access our extended lender network</h3>
      
          <p>
           We send your request out to our extended network of third-party non-lender 
           lender networks in the event that we are unable to locate a lender in our
           direct lender network who may be ready to offer you a loan. This improves your 
           chances of being put in touch with a lender and allows us to monetize our free service.
          Learn more in our Ad Disclosure.
          </p>
       </div>

       <div className="experience__backend">
       
       <h3>Learn about other credit-related products</h3>
        <p>
          We will present you with offers for additional
         credit-related goods and services when you use our
          service. This additional marketing enables us to 
          generate revenue from our free service.
          Learn more in our Ad Disclosure.

        </p>
  
       </div>
          

   </div>

     
      <center>
        <Link to="/page2">
       <button className='btn btn-primary btn-pos' >Get Started</button>
       </Link>
      </center>

    </section>
  )
}

export default Experience
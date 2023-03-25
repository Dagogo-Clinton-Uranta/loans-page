import React from 'react'
import './features.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import {BsWatch} from 'react-icons/bs'
import {FaLaptopCode,FaLock} from 'react-icons/fa'


const Features = () => {
  return (
    <section id='features'>
   
   <h2>Why Poorcredit QuickLoans</h2>

   <center>
   You can manage leads and sales with our tracking software,
    administer your affiliate program automatically, 
    and integrate PayPal seamlessly.
   </center>
   
   <div className="container features__container">
   
      <div className="features__backend">
        <div className='iconContainer'>
        <FaLock/>
        </div>
       <h3>Our service is free to use</h3>
       <p>
         No extra costs. No up-front expenses. There is none. Before accepting any 
         money, review your loan offer.
         Review Rates & Fees and Terms of Use for more information.
       </p>
  
       
      </div>

       <div className="features__backend">
       <div className='iconContainer'>
        <FaLaptopCode/>
        </div>
       <h3>Get funding fast, directly to your account</h3>
      
       <p>
       You can quickly connect with funding opportunities by filling
        out our simple online form.
       If accepted, you could have your money as soon as the following
        working day.
       </p>
       </div>

       <div className="features__backend">
       <div className='iconContainer'>
        <BsWatch/>
        </div>
       <h3>Request a loan for any occasion</h3>
      
         <p>
          You can use Poorcredit, QuickLoans  for everything that comes your way.
           Whether you need money for an emergency,
           home improvement, new business venture, unanticipated payment,
            or family vacation, we can help you.
        </p>

       </div>
          

   </div>

     
     
    </section>
  )
}

export default Features
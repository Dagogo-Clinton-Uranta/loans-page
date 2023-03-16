import React from 'react'
import './tutorial.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import formFill from '../../assets/formfill.jpg'
import handshake from '../../assets/handshake.jpg'

const Tutorial = () => {
  return (
    <section id='tutorial'>
   
  
   
   <div className="container tutorial__container">
   
      <div className="tutorial__frontend">
      
       <p>
       You fill out the simple loan request form here on our website, including how much money you would like to borrow,
        your credit type, and loan reason. The form will also require you to provide some personal, banking, and income 
        information. This information will be shown to the lenders in our network and in other third-party lender networks 
        so the lenders in these networks can choose whether to offer you a loan.
       </p>
  
       
      </div>

       <div className="tutorial__backend">
       <img src={formFill} alt="filling form on our website" />
       </div>
       

       <div className="tutorial__backend">
       <img src={handshake} alt="filling form on our website" />
       </div>


       <div className="tutorial__backend">
       
      
         <p>
         Shortly after reviewing your loan request information, lenders or lending partners 
         will make a decision on whether to offer you a loan by inviting you to complete an 
         application with them on their website based on the information provided. If approved,
          you'll be redirected to a loan agreement with terms and conditions, including the
           amount you will need to repay and the repayment time frame. Make sure you understand 
           the key elements to your loan agreement, including the loan interest rate as well as
            the repayment terms prior to accepting an offer.
        </p>

       </div>



   </div>

     
    
    </section>
  )
}

export default Tutorial
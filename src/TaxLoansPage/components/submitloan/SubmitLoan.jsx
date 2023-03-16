import React from 'react'
import './submitloan.css'
import countPennies from '../../assets/counting-pennies.jpg'


const SubmitLoan = () => {
  return (
    <section id='submitloan'>
    <div className="container submitloan__container">
     
      <div className="submitloanExplainer">
      <h2>Learn More Today</h2>

         <p>
         Although PersonalLoans.com’s lender network does
          not offer Tax Refund Advance Loans, you can still
          <a>Submit a personal loan request</a> today for any other
            reason. If you have any questions, contact us via 
            phone or email. We’re happy to help you every step 
            of the way.


        </p>

        <button className="btn btn-primary">Get Started</button>
      </div>

    </div>
    </section>
  )
}

export default SubmitLoan
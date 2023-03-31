import React from 'react'
import './submitloan.css'
import countPennies from '../../assets/counting-pennies.jpg'
import { Link } from 'react-router-dom'


const SubmitLoan = () => {
  return (
    <section id='submitloan'>
    <div className="container submitloan__container">
     
      <div className="submitloanExplainer">
      <h2>Learn More Today</h2>

         <p>
         Although poorcreditquickloans.com’s lender network does
          not offer Tax Refund Advance Loans, you can still
          <a>Submit a personal loan request</a> today for any other
            reason. If you have any questions, contact us via 
            phone or email. We’re happy to help you every step 
            of the way.


        </p>

        <Link to= {'/page2'}>
       <button className='btn btn-primary '>Get Started</button>
       </Link>
      </div>

    </div>
    </section>
  )
}

export default SubmitLoan
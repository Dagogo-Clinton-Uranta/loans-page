import React from 'react'
import './submitloan.css'
import countPennies from '../../assets/counting-pennies.jpg'


const SubmitLoan = () => {
  return (
    <section id='submitloan'>
    <div className="container submitloan__container">
     
      <div className="submitloanExplainer">
      <h2>Poorcredit.com</h2>

         <p>
         <a href="/#">Fill out a loan request form</a> with PersonalLoans.com
          today to see if you qualify.  <a href="/#">Contact us</a> with any
           questions pertaining to the process.
            For questions about your specific loan,
             contact the lender directly.

        </p>

        <button className="btn btn-primary">Get Started</button>
      </div>

    </div>
    </section>
  )
}

export default SubmitLoan
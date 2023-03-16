import React from 'react'
import './submitloan.css'
import countPennies from '../../assets/counting-pennies.jpg'


const SubmitLoan = () => {
  return (
    <section id='submitloan'>
    <div className="container submitloan__container">
     
      <div className="submitloanExplainer">
      <h2>Submit a Loan Request</h2>

         <p>
         Go to <a href="#">Poorcreditquickloans.com</a> today to fill out our online form or clear
          up any questions you may have about quick cash loans. For more information 
          about our personal loan process and how it all works, <a href="#">visit our website.</a>
                 Get Started
        </p>

        <button className="btn btn-primary">Get Started</button>
      </div>

    </div>
    </section>
  )
}

export default SubmitLoan
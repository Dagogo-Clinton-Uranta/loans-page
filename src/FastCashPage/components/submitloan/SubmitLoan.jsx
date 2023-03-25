import React from 'react'
import './submitloan.css'
import countPennies from '../../assets/counting-pennies.jpg'
import {Link} from 'react-router-dom'

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
         <Link to={'/page2'}>
        <button className="btn btn-primary">Get Started</button>
        </Link>
      </div>

    </div>
    </section>
  )
}

export default SubmitLoan
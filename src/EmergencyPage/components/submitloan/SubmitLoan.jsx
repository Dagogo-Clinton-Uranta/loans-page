import React from 'react'
import './submitloan.css'
import countPennies from '../../assets/counting-pennies.jpg'


const SubmitLoan = () => {
  return (
    <section id='submitloan'>
    <div className="container submitloan__container">
     
      <div className="submitloanExplainer">
      <h2>Emergency Loan Help</h2>

         <p>
         PersonalLoans.com is happy to provide help and support throughout your financial journey.
          You are welcome to <a href="/#">contact us with any questions</a> you may have about our process.
           Questions about a specific loan you have already agreed to should be taken directly
            to the lender. <a href="/#">Get started</a> with PersonalLoans.com today!
        </p>

        <button className="btn btn-primary">Get Started</button>
      </div>

    </div>
    </section>
  )
}

export default SubmitLoan
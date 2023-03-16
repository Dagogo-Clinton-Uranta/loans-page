import React from 'react'
import './submitloan.css'
import countPennies from '../../assets/counting-pennies.jpg'


const SubmitLoan = () => {
  return (
    <section id='submitloan'>
    <div className="container submitloan__container">
     
      <div className="submitloanExplainer">
      <h2>Debt Consolidation Help</h2>

         <p>
         Learning how to consolidate credit card debt and other payments
          can be simple with the right assistance. <a href="/#">PersonalLoans.com</a>  can 
          get you on track by connecting you with a lender that can work for
           you. Simply fill out an online request form and we’ll let you know 
           if one of our lending partners has an offer for you! Learn more about
            how to consolidate debt with <a href="/#"> Poorcreditquickloans.com</a> today!
        </p>

        <button className="btn btn-primary">Get Started</button>
      </div>

    </div>
    </section>
  )
}

export default SubmitLoan
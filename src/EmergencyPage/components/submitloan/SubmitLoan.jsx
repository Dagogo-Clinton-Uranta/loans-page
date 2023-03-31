import React from 'react'
import './submitloan.css'
import countPennies from '../../assets/counting-pennies.jpg'
import {Link} from 'react-router-dom'


const SubmitLoan = () => {
  return (
    <section id='submitloan'>
    <div className="container submitloan__container">
     
      <div className="submitloanExplainer">
      <h2>Emergency Loan Help</h2>

         <p>
         poorcreditquickloans.com is happy to provide help and support throughout your financial journey.
          You are welcome to <a href="/#">contact us with any questions</a> you may have about our process.
           Questions about a specific loan you have already agreed to should be taken directly
            to the lender. <Link to="/page2">Get started</Link> with poorcreditquickloans.com today!
        </p>

        <button className="btn btn-primary">Get Started</button>
      </div>

    </div>
    </section>
  )
}

export default SubmitLoan
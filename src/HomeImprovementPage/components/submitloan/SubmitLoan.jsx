import React from 'react'
import './submitloan.css'
import countPennies from '../../assets/counting-pennies.jpg'
import { Link } from 'react-router-dom'

const SubmitLoan = () => {
  return (
    <section id='submitloan'>
    <div className="container submitloan__container">
     
      <div className="submitloanExplainer">
      <h2>Get Started on Your Next Home Improvement Project</h2>

         <p>
         If you’re ready for your next home improvement project
          and just need the funds to  <a href="/#">get started</a>, check out
           PersonalLoans.com. <a href="/#">Learn more about us</a> and what we do,
            then let us help you find a lender for your home improvement
             loans!

        </p>

        <Link to= {'/page2'}>
       <button className='btn btn-primary'>Get Started</button>
       </Link>
      </div>

    </div>
    </section>
  )
}

export default SubmitLoan
import React from 'react'
import './submitloan.css'
import countPennies from '../../assets/counting-pennies.jpg'


const SubmitLoan = () => {
  return (
    <section id='submitloan'>
    <div className="container submitloan__container">
     
      <div className="submitloanExplainer">
      <h2>A Better Financial Future</h2>

         <p>
         At Poorcredit.com, we provide consumers with
         a convenient online loan request process that 
         connects you with a network of reputable lenders 
         and lending partners. Learn more <a href="/#">about our easy
          loan request process</a> and how you can secure a 
          better financial future for yourself with the
           tools and resources on our website.


        </p>

        <button className="btn btn-primary">Get Started</button>
      </div>

    </div>
    </section>
  )
}

export default SubmitLoan